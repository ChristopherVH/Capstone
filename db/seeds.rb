# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username:"chris", password:123456)
User.create!(username:"josh", password:123456)
User.create!(username:"markos", password:123456)
User.create!(username:"laurie", password:123456)
User.create!(username:"nhat", password:123456)
Song.create!(user_id:1, title:"juice", artist:"chance the rapper", genre:"rap", audio_url:"https://s3.amazonaws.com/nimbusplaylist/Chance+The+Rapper+-+Israel+instrumental_223221059_soundcloud.mp3",
image_url: "http://thumbs.dreamstime.com/t/blank-record-album-cover-white-label-coming-out-white-isolated-red-background-35053297.jpg")
Song.create!(user_id:1, title:"juice2", artist:"chance the rapper", genre:"rap", audio_url:"https://s3.amazonaws.com/nimbusplaylist/Chance+The+Rapper+-+Israel+instrumental_223221059_soundcloud.mp3")
Song.create!(user_id:1, title:"juice3", artist:"chance the rapper", genre:"rap", audio_url:"https://s3.amazonaws.com/nimbusplaylist/Chance+The+Rapper+-+Israel+instrumental_223221059_soundcloud.mp3")
Like.create!(user_id:1, song_id:2)
Like.create!(user_id:2, song_id:2)
Like.create!(user_id:3, song_id:2)
Like.create!(user_id:5, song_id:2)
Like.create!(user_id:1, song_id:3)
Like.create!(user_id:3, song_id:3)
Like.create!(user_id:5, song_id:3)
Playlist.create!(user_id:1, title:"first chris playlist", description:"dope tracks")
PlaylistSong.create!(playlist_id:1, song_id:2,ord:1)
PlaylistSong.create!(playlist_id:1, song_id:3,ord:2)
Playlist.create!(user_id:2, title:"first josh playlist", description:"dope tracks")
PlaylistSong.create!(playlist_id:2, song_id:3,ord:1)
PlaylistSong.create!(playlist_id:2, song_id:1,ord:2)
