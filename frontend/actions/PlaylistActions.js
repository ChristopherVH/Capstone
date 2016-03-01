var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/PlaylistConstants.js');
var apiUtil = require("../util/apiUtil.js");

PlaylistActions = {
  fetchAllPlaylists: function () {
    apiUtil.fetchAllPlaylists(this.receivePlaylists);
  },
  receivePlaylists: function (playlists) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLISTS_RECEIVED,
      playlists: playlists
    });
  },
  fetchPlaylist: function(id){
    apiUtil.fetchPlaylist(id, this.receivePlaylist);
  },
  receivePlaylist: function (playlist) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLIST_RECEIVED,
      playlist: playlist
    });
  },
  fetchOnePlaylist: function(id){
    apiUtil.fetchPlaylist(id, this.receiveOnePlaylist);
  },
  receiveOnePlaylist: function (playlist) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.SINGLE_PLAYLIST_RECEIVED,
      playlist: playlist
    });
  }
};

module.exports = PlaylistActions;
