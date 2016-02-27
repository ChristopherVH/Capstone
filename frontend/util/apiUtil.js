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
