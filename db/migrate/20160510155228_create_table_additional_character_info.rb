class CreateTableAdditionalCharacterInfo < ActiveRecord::Migration
  def change
    create_table :character_infos do |t|
        t.integer :character_id
        t.integer :item_lvl
        t.timestamps null: false
    end
    add_foreign_key :character_infos, :characters, dependent: :delete

    add_column :characters, :armory_addr, :string
  end
end
