var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/UserConstants.js');
var apiUtil = require("../util/apiUtil.js");

var LikeActions = {
  createLike: function (userId, songId){
    console.log("create like action running");
    apiUtil.createLike(songId, userId, this.receiveLike);
  },
  receiveLike: function(songId) {
    Dispatcher.dispatch({
      actionType : UserConstants.LIKE,
      songId : songId
    });
  },
  deleteLike: function (userId, songId) {
    apiUtil.destroyLike(songId, userId, this.receiveDislike);
  },
  receiveDislike: function(songId) {
    Dispatcher.dispatch({
      actionType : UserConstants.DISLIKE,
      songId : songId
    });
  }
};

module.exports = LikeActions;
