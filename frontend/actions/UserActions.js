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
  }
};

module.exports = UserActions;
