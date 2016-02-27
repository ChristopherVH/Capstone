var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require("../constants/UserConstants");

var SingleUserStore = new Store(AppDispatcher);

var _single = {};

SingleUserStore.access = function(){
  var singledup = $.extend({}, _single);
  return singledup;
};

SingleUserStore.setUser = function(user) {
  _single = user;
};

SingleUserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      SingleUserStore.setUser(payload.user);
      SingleUserStore.__emitChange();
      break;
  }
};

module.exports = SingleUserStore;
