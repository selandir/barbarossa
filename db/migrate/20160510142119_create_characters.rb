class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|

      t.string :name

      t.string :game_class
      t.string :game_role
      t.string :game_tag
      t.integer :user_id
      t.timestamps null: false
    end

    add_foreign_key :characters, :users, dependent: :delete

  end
end
