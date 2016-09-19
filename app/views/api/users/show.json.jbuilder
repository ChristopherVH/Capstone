
json.extract! @user, :id, :username, :profile_url, :cover_url
json.songs @user.songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :user, :created_at, :updated_at
json.playlists @user.playlists, :id, :user_id, :title, :description, :songs, :created_at
json.liked_songs @user.liked_songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :likers, :user, :created_at, :updated_at

likes = Hash.new()
@user.liked_songs.each do |song|
  likes[song.id] = song.title
end

json.liked_songs_hash likes

json.feed do
  json.songs @user.songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :user, :created_at
  json.playlists @user.playlists, :id, :user_id, :title, :description, :songs, :created_at
  json.liked_songs @user.liked_songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :likers, :user, :created_at
end

json.allsongs (@user.songs.to_a).concat(@user.liked_songs.to_a).uniq
