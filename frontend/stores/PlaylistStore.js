var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var PlaylistConstant = require("../constants/PlaylistConstants");

var PlaylistStore = new Store(AppDispatcher);

var _playlists = {};
var _playlist = {};

PlaylistStore.all = function(){
  return Object.keys(_playlists).map(function(key){
    return _playlists[key];
  });
};

PlaylistStore.find = function (id) {
  return _playlists[id];
};

PlaylistStore.oneList = function(){
  var playlistdup = $.extend({}, _playlist);
  return playlistdup;
};

PlaylistStore.addPlaylist = function(playlist) {
  _playlists[playlist.id] = playlist;
};

PlaylistStore.resetPlaylists = function(playlists){
  _playlists = {};
  for (var i = 0; i < playlists.length; i++) {
    _playlists[playlists[i].id]= playlists[i];
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
    case PlaylistConstant.SINGLE_PLAYLIST_RECEIVED:
      PlaylistStore.resetOnePlaylist(payload.playlist);
      PlaylistStore.__emitChange();
      break;
  }
};

module.exports = PlaylistStore;
