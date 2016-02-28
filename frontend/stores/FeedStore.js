var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var FeedConstant = require("../constants/FeedConstants");

var FeedStore = new Store(AppDispatcher);

var _feed = [];

FeedStore.all = function(){
  return _feed.map(function(feedel){
    return feedel;
  });
};

FeedStore.find = function (id) {
  return _songs[id];
};

FeedStore.addFeed = function(song) {
  _songs[song.id] = song;
};

FeedStore.resetFeeds = function(songs){
  _songs = {};
  for (var i = 0; i < songs.length; i++) {
    _songs[songs[i].id]= songs[i];
  }
};

FeedStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FeedConstant.SONGS_RECEIVED:
      FeedStore.resetFeeds(payload.songs);
      FeedStore.__emitChange();
      break;
    case FeedConstant.SONG_RECEIVED:
      FeedStore.addFeed(payload.song);
      FeedStore.__emitChange();
      break;
  }
};

module.exports = FeedStore;
