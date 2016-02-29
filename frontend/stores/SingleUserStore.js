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
  }
};

module.exports = SingleUserStore;
