class Character < ActiveRecord::Base
  validate :armory_link
  before_save :update_item_lvl
  before_destroy :destroy_infos
  has_many :character_infos

  def armory_link
    require 'open-uri'

    addr = 'http://eu.battle.net/wow/en/character/burning-legion/' + self.name + '/simple'
    data = nil
    begin
      open(addr) { |io| data = io.read }
    rescue
      self.armory_addr = ''
      errors[:name] << 'Upewnij się, że nick postaci z serwera Burning Legion EU jest poprawny.'
      return
    end
  end

  def update_item_lvl
    return if self.name.blank?
    require 'open-uri'

    self.armory_addr = 'http://eu.battle.net/wow/en/character/burning-legion/' + self.name + '/simple'
    data = nil
    begin
      open(self.armory_addr) { |io| data = io.read }
    rescue
      self.armory_addr = ''
      errors[:name] << 'Upewnij się, że nick postaci z serwera Burning Legion EU jest poprawny.'
      return
    end
    item_lvl = data.split('id="summary-averageilvl-best" class="best tip" data-id="averageilvl">').last.match(/\d+/)[0]
    data_arr = data.split('class="under-name color-c').last[3..500].gsub("\t", '').gsub(/<[^>]*>/, '').split(' ')
    self.game_class = data_arr[data_arr.index("Burning")-1][0..-2] # name without comma
    self.game_class = 'Death Knight' if self.game_class == 'Knight'
    if item_lvl.size <= 3
      self.character_infos.push(CharacterInfo.new(:item_lvl => item_lvl))
    end
  end

  def ilvl
    self.character_infos.order(:created_at).first.item_lvl rescue ''
  end

  def destroy_infos
    self.character_infos.each { |i| i.destroy! }
  end

end
