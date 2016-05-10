class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :content
      t.timestamps null: false
    end
    add_foreign_key :posts, :users, dependent: :delete
  end
end
