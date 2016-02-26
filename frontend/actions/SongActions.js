var Dispatcher = require('../dispatcher/dispatcher.js');
var SongConstant = require('../constants/SongConstants.js');

module.exports = {
  receiveSongs: function (songs) {
    Dispatcher.dispatch({
      actionType: SongConstant.SONGS_RECEIVED,
      songs: songs
    });
  },
  //TODO do not refernce []
  receiveSong: function (song) {
    Dispatcher.dispatch({
      actionType: SongConstant[SONG_RECEIVED],
      song: song
    });
  },
  fetchAllSongs: function (songs) {
    Dispatcher.dispatch({
      actionType: SongConstant.FETCH_ALL_SONGS,
      songs: songs
    });
  }
};
