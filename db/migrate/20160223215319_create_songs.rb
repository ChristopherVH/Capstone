class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.string :title, null: false
      t.string :artist, null: false
      t.string :genre, null: false
      t.string :image_url
      t.string :audio_url, null: false
      t.timestamps null: false
    end
    add_index :songs, :user_id
    add_index :songs, :title
  end
end
