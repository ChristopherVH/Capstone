var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require("../constants/UserConstants");

var SingleUserStore = new Store(AppDispatcher);

var _single = {};
var _current = {};
var _users = {};

SingleUserStore.access = function(){
  var singledup = $.extend({}, _single);
  return singledup;
};

SingleUserStore.currentUser = function(){
  var currentdup = $.extend({}, _current);
  return currentdup;
};

SingleUserStore.setUser = function(user) {
  _single = user;
};

SingleUserStore.setCurrentUser = function(user) {
  _current = user;
};

SingleUserStore.addLike = function(songId) {
  _current["liked_songs_hash"][songId] = "X";
};

SingleUserStore.deleteLike = function(songId) {
  delete _current["liked_songs_hash"][songId];
};

SingleUserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      SingleUserStore.setUser(payload.user);
      SingleUserStore.__emitChange();
      break;
    case UserConstants.CURRENT_USER_RECEIVED:
      SingleUserStore.setCurrentUser(payload.currentUser);
      SingleUserStore.__emitChange();
      break;
    case UserConstants.SIGN_OUT_RECEIVED:
      SingleUserStore.setCurrentUser(payload.user);
      SingleUserStore.__emitChange();
      break;
    case UserConstants.PROFILE_IMAGE_UPDATED:
      SingleUserStore.setUser(payload.user);
      SingleUserStore.__emitChange();
      break;
    case UserConstants.LIKE:
      SingleUserStore.addLike(payload.songId);
      SingleUserStore.__emitChange();
      break;
    case UserConstants.DISLIKE:
      SingleUserStore.deleteLike(payload.songId);
      SingleUserStore.__emitChange();
      break;
}
};

module.exports = SingleUserStore;
