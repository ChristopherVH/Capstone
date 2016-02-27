var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/PlaylistConstants.js');
var apiUtil = require("../util/apiUtil.js");

PlaylistActions = {
  receivePlaylists: function (playlists) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLISTS_RECEIVED,
      playlists: playlists
    });
  },
  receivePlaylist: function (playlist) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLIST_RECEIVED,
      playlist: playlist
    });
  },
  receiveOnePlaylist: function (playlist) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.SINGLE_PLAYLIST_RECEIVED,
      playlist: playlist
    });
  },
  fetchAllPlaylists: function () {
    //dispatch for spinner or something
    apiUtil.fetchAllPlaylists(this.receivePlaylists);
  },
  fetchPlaylist: function(id){
    apiUtil.fetchPlaylist(id, this.receivePlaylist);
  },
  fetchOnePlaylist: function(id){
    apiUtil.fetchPlaylist(id, this.receiveOnePlaylist);
  }
};

module.exports = PlaylistActions;
