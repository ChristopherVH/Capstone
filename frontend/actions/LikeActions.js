var Dispatcher = require('../dispatcher/dispatcher.js');
var apiUtil = require("../util/apiUtil.js");

LikeActions = {
  createLike: function (userId, songId) {
    apiUtil.createLike(songId);
  },
  deleteLike: function (userId, songId) {
    apiUtil.destroyLike(songId);
  }
};

module.exports = LikeActions;
