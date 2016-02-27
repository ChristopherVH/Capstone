var Dispatcher = require('../dispatcher/dispatcher.js');
var SongConstants = require('../constants/SongConstants.js');
var apiUtil = require("../util/apiUtil.js");

SongActions = {
  receiveSongs: function (songs) {
    Dispatcher.dispatch({
      actionType: SongConstants.SONGS_RECEIVED,
      songs: songs
    });
  },
  receiveSong: function (song) {
    Dispatcher.dispatch({
      actionType: SongConstants.SONG_RECEIVED,
      song: song
    });
  },
  fetchTrendingSongs: function () {
    //dispatch for spinner or something
    apiUtil.fetchTrendingSongs(this.receiveTrendingSongs)
  },
  receiveTrendingSongs: function (songs) {
    Dispatcher.dispatch({
      actionType: SongConstants.TRENDING_SONGS_RECEIVED,
      songs: songs
    });
  },
  fetchAllSongs: function () {
    //dispatch for spinner or something
    apiUtil.fetchAllSongs(this.receiveSongs)
  },
  fetchSong: function(id){
    apiUtil.fetchSong(this.receiveSong)
  }
};

module.exports = SongActions;
