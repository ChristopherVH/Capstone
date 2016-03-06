json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
end
json.array! @songs do |songs|
  json.extract! songs, :id, :title, :genre
end
json.array! @users do |user|
  json.extract! user, :id, :username
end
