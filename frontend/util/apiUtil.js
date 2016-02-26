var SongActions = require('../actions/SongActions.js');
var Dispatcher = require("../dispatcher/dispatcher.js");
var SongConstants = require("../constants/SongConstants.js");

var songUtil = {
  fetchAllSongs: function(){
    $.ajax({
      type:"GET",
      url: "api/songs",
      success: function (songs) {
        SongActions.receiveSongs(songs);
      }
    });
  },
  fetchSong: function(id){
    $.ajax({
      type:"GET",
      url:"api/songs/" + id,
      success:function (song){
        SongActions.recieveSong(song); //TODO implement this when its actually useful
      }
    });
  }
};

Dispatcher.register(function (payload){
  switch (payload.actionType) {
    case SongConstants.FETCH_ALL_SONGS:
        songUtil.fetchAllSongs();
      break;
    default:

  }
});

module.exports = songUtil;


//   fetchAllPokemons: function () {
//   $.ajax({
//     url: "api/pokemon",
//     success: function (pokemons) {
//       ApiActions.receiveAllPokemons(pokemons);
//     }
//   })
// },
