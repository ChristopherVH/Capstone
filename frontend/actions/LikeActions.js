var Dispatcher = require('../dispatcher/dispatcher.js');
var apiUtil = require("../util/apiUtil.js");
var UserActions = require("./UserActions.js");

LikeActions = {
  createLike: function (userId, songId) {
    apiUtil.createLike(songId);
    UserActions.fetchCurrentUser();
  },
  deleteLike: function (userId, songId) {
    apiUtil.destroyLike(songId);
    UserActions.fetchCurrentUser();
  }
};

module.exports = LikeActions;
