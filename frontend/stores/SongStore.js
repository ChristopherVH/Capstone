var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var SongConstant = require("../constants/SongConstants");

var SongStore = new Store(AppDispatcher);

var _songs = {};

SongStore.all = function(){
  return Object.keys(_songs).map(function(key){
    return _songs[key];
  });
};

SongStore.find = function (id) {
  return _songs[id];
};

SongStore.addSong = function(song) {
  _songs[song.id] = song;
};

SongStore.resetSongs = function(songs){
  _songs = {};
  for (var i = 0; i < songs.length; i++) {
    _songs[songs[i].id]= songs[i];
  }
};

SongStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SongConstant.SONGS_RECEIVED:
      SongStore.resetSongs(payload.songs);
      SongStore.__emitChange();
      break;
    case SongConstant.SONG_RECIEVED:
      SongStore.addSong(payload.song);
      SongStore.__emitChange();
      break;
  }
};

module.exports = SongStore;
