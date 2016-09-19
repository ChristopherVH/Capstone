var songUtil = {
  fetchAllSongs: function(callback){
    $.ajax({
      type:"GET",
      url: "api/songs",
      success: function (songs) {
        callback(songs)
        //goes back to song actions, dispatches
      }
    });
  },
  fetchSong: function(id, callback){
    $.ajax({
      type:"GET",
      url:"api/songs/" + id,
      success:function (song){
        callback(song); //TODO implement this when its actually useful
      }
    });
  },
  fetchAllPlaylists: function(callback){
    $.ajax({
      type:"GET",
      url: "api/playlists",
      success: function (playlists) {
        callback(playlists)
        //goes back to song actions, dispatches
      }
    });
  },
  fetchPlaylist: function(id, callback){
    $.ajax({
      type:"GET",
      url:"api/playlists/" + id,
      success:function (playlist){
        callback(playlist);
      }
    });
  },
  createPlaylist: function(title, description, callback1, callback2, songId, song){
    $.ajax({
      type:"POST",
      url: "api/playlists",
      data: {title: title, description: description},
      success: function (playlist) {
        playlist.songs.push(song);
        callback1(songId, playlist.id, 1);
        callback2(playlist);
      }
    });
  },
  deletePlaylist: function(id, callback){
    $.ajax({
      type:"DELETE",
      url: "api/playlists/" + id,
      data: {id: id},
      success: function () {
        callback(id);
      }
    });
  },
  fetchTrendingSongs: function(callback){
    $.ajax({
      type:"GET",
      url: "api/songs/trending",
      success: function (songs) {
        callback(songs);
      }
    });
  },
  createLike: function(songId, userId, callback){
    $.ajax({
      type:"POST",
      url: "api/songs/"+ songId + "/like",
      data: {user_id: userId},
      success: function(){
        callback(songId);
      }
    });
  },
  destroyLike: function(songId, userId, callback){
    $.ajax({
      type:"DELETE",
      url: "api/songs/" + songId + "/like",
      data: {user_id: userId},
      success: function(){
        callback(songId);
      }
    });
  },
  addSong:function (songId, playlistId, ord){
    $.ajax({
      type:"POST",
      data:{playlist_id: playlistId, song_id: songId, ord:ord},
      url: "api/playlist_songs",
    });
  },
  deleteSong: function(id, playlistId){
    $.ajax({
      method:"DELETE",
      url: "api/playlist_songs/" + id
    });
  },
  searchDatabase: function(searchTerm, callback) {
    $.ajax({
      url: 'api/searches',
      type: 'GET',
      data: {searchTerm: searchTerm},
      success: function (results) {
        callback(results);
      }
    });
  },
};

module.exports = songUtil;


//   fetchAllPokemons: function () {
//   $.ajax({
//     url: "api/pokemon",
//     success: function (pokemons) {
//       ApiActions.receiveAllPokemons(pokemons);
//     }
//   })
// },
