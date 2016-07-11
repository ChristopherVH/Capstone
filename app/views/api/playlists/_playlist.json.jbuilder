json.extract! playlist, :id, :user_id, :title, :description, :updated_at, :created_at

json.songs playlist.playlist_songs do |song|
  json.id song.id
  json.ord song.ord
  json.song song.song
end

songhash = Hash.new()
playlist.songs.each do |song|
  songhash[song.id] = song.title
end

json.songIndex songhash

json.user playlist.user.username
