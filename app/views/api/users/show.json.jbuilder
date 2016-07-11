
# json.array! @songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url
# json.array! @playlists, :id, :user_id, :title, :description, :songs
# json.array! @liked_songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url
json.extract! @user, :id, :username, :profile_url, :cover_url
json.songs @user.songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :user, :created_at
json.playlists @user.playlists, :id, :user_id, :title, :description, :songs, :created_at
json.liked_songs @user.liked_songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :likers, :user, :created_at

#Song: title artist imageurl id user
json.feed do
  json.songs @user.songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :user, :created_at
  json.playlists @user.playlists, :id, :user_id, :title, :description, :songs, :created_at
  json.liked_songs @user.liked_songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url, :likers, :user, :created_at
end

json.allsongs (@user.songs.to_a).concat(@user.liked_songs.to_a).uniq


# json.feed @user.playlists.to_a.concat(@user.songs.to_a).concat(@user.liked_songs.to_a).uniq.sort_by{ |x| x.created_at}.reverse
#TODO actually make playlists have songs so i can put them in the feed
#TODO get likes to show at top of feed
#TODO get likers to show up in feed
