json.extract! playlist, :id, :user_id, :title, :description, :updated_at

json.songs playlist.playlist_songs do |song|
  json.ord song.ord
  json.song song.song
end

json.user playlist.user
