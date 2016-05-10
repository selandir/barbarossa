class Character < ActiveRecord::Base
  before_save :update_item_lvl
  before_destroy :destroy_infos
  has_many :character_infos

  def update_item_lvl
    return if self.armory_addr.blank?
    require 'open-uri'

    data = nil
    begin
      open(self.armory_addr) { |io| data = io.read }
    rescue
      self.armory_addr = ''
      return
    end
    item_lvl = data.split('id="summary-averageilvl-best" class="best tip" data-id="averageilvl">').last.match(/\d+/)[0]

    if item_lvl.size == 3
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
