json.extract! @user, :id, :username, :playlists

likes = Hash.new()
@user.liked_songs.each do |song|
  likes[song.id] = song.title
end

json.liked_songs_hash likes

json.liked_songs @likes
