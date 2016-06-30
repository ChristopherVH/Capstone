var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/UserConstants.js');
var userUtil = require('../util/userUtil.js');

var UserActions = {
  fetchUserInfo: function (user_id) {
    userUtil.fetchUserInfo(user_id, this.receiveUserInfo);
  },
  receiveUserInfo: function (userinfo) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: userinfo
    });
  },
  fetchCurrentUser: function () {
    userUtil.fetchCurrentUser(this.receiveCurrentUser);
  },
  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },
  signOut: function(){
    userUtil.signOut(this.receiveSignOut);
  },
  receiveSignOut: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_OUT_RECEIVED,
      user: {}
    });
  },
  updateProfileImage: function(url, user_id){
    userUtil.updateProfileImage(url, user_id, this.receiveNewProfileImage);
  },
  receiveNewProfileImage: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.PROFILE_IMAGE_UPDATED,
      user: user
    });
  }
};

module.exports = UserActions;
