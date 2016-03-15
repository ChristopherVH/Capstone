var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/PlaylistConstants.js');
var apiUtil = require("../util/apiUtil.js");
var userUtil = require("../util/userUtil.js");

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
  fetchUserPlaylists: function (userId) {
    userUtil.fetchUserPlaylists(userId, this.receiveUserPlaylists);
  },
  receiveUserPlaylists: function (playlists) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.USER_PLAYLISTS_RECEIVED,
      playlists: playlists
    });
  },
  addSongToPlaylist: function(songId, playlistId, ord){
    apiUtil.addSong(songId, playlistId, ord);
    this.fetchPlaylist(playlistId);
  },
  deleteSongFromPlaylist: function(playlistId, playlistSongId){
    apiUtil.deleteSong(playlistSongId, playlistId);
    this.fetchPlaylist(playlistId);
  },
  createPlaylist: function(title, description, songId){
    apiUtil.createPlaylist(title, description, this.receiveNewPlaylist);
  },
  receiveNewPlaylist: function (playlist, songId) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.NEW_PLAYLIST_RECEIVED,
      playlist: playlist
    });
  }
};

module.exports = PlaylistActions;
