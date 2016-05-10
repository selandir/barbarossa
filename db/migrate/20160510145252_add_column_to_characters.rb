class AddColumnToCharacters < ActiveRecord::Migration
  def change
    add_column :characters, :game_alt_role, :string
  end
end
