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
    apiUtil.fetchTrendingSongs(this.receiveTrendingSongs)
  },
  receiveTrendingSongs: function (songs) {
    Dispatcher.dispatch({
      actionType: SongConstants.TRENDING_SONGS_RECEIVED,
      songs: songs
    });
  },
  fetchAllSongs: function () {
    apiUtil.fetchAllSongs(this.receiveSongs)
  },
  fetchSong: function(id){
    apiUtil.fetchSong(id, this.receiveSong)
  }
};

module.exports = SongActions;
