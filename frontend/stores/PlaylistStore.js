var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var PlaylistConstant = require("../constants/PlaylistConstants");

var PlaylistStore = new Store(AppDispatcher);

var _playlists = [];
var _playlisthash = {};
var _playlist = {};
var _newplaylist = {};

PlaylistStore.all = function(){
  return _playlists.map(function(playlist){
    return playlist;
  });
};

PlaylistStore.find = function (id) {
  return _playlisthash[id];
};

PlaylistStore.storeNewPlaylist = function(playlist){
  _newplaylist = playlist;
};

PlaylistStore.newPlaylist = function(){
  var playlistdup = $.extend({}, _newplaylist);
  return playlistdup;
};

PlaylistStore.addPlaylist = function(playlist) {
  _playlisthash[playlist.id] = playlist;
  var added = false;
  for (var i = 0; i < _playlists.length; i++) {
    if (_playlists[i].id === playlist.id){
      _playlists[i] = playlist;
      added = true;
    }
    if (!added){
      _playlists.push(playlist);
    }
  }
};

PlaylistStore.resetPlaylists = function(playlists){
  _playlists = [];
  _playlisthash = {};
  for (var i = 0; i < playlists.length; i++) {
    _playlists.push(playlists[i]);
  }
  for (var i = 0; i < playlists.length; i++) {
    _playlisthash[playlists[i].id]= playlists[i];
  }
};

PlaylistStore.resetOnePlaylist = function(playlist){
  _playlist = playlist;
};

PlaylistStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PlaylistConstant.PLAYLISTS_RECEIVED:
      PlaylistStore.resetPlaylists(payload.playlists);
      PlaylistStore.__emitChange();
      break;
    case PlaylistConstant.PLAYLIST_RECEIVED:
      PlaylistStore.addPlaylist(payload.playlist);
      PlaylistStore.__emitChange();
      break;
    case PlaylistConstant.USER_PLAYLISTS_RECEIVED:
      PlaylistStore.resetPlaylists(payload.playlists);
      PlaylistStore.__emitChange();
      break;
    case PlaylistConstant.NEW_PLAYLIST_RECEIVED:
      PlaylistStore.addPlaylist(payload.playlist);
      PlaylistStore.storeNewPlaylist(payload.playlist);
      PlaylistStore.__emitChange();
      break;
  }
};

module.exports = PlaylistStore;
