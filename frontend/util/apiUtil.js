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
        callback(playlist); //TODO implement this when its actually useful
      }
    });
  },
  fetchTrendingSongs: function(callback){
    $.ajax({
      type:"GET",
      url: "api/songs/trending",
      success: function (songs) {
        callback(songs)
        //goes back to song actions, dispatches
      }
    });
  },
  createLike: function(songId){
    $.ajax({
      type:"POST",
      url: "api/songs/"+ songId + "/like"
    });
  },
  destroyLike: function(songId){
    $.ajax({
      type:"DELETE",
      url: "api/songs/" + songId + "/like"
    });
  },
  addSong:function (songId, playlistId, ord){
    $.ajax({
      type:"POST",
      data:{playlist_id: playlistId, song_id: songId, ord:ord},
      url: "api/playlist_songs"
    });
  },
  deleteSong: function(id, playlistId){
    $.ajax({
      type:"DELETE",
      url: "api/playlist_songs/" + id
    });
  }
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
