json.extract! @user, :id, :username, :profile_url, :cover_url
json.songs @user.songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url
json.playlists @user.playlists, :id, :user_id, :title, :description, :songs
json.liked_songs @user.liked_songs, :id, :user_id, :title, :artist, :genre, :audio_url, :image_url

json.feed @user.playlists.to_a.concat(@user.songs.to_a).concat(@user.liked_songs.to_a).uniq.sort_by{ |x| x.created_at}.reverse
