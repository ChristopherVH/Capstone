var Dispatcher = require('../dispatcher/dispatcher.js');
var FeedConstants = require('../constants/FeedConstants.js');
var feedUtil = require('../util/feedUtil.js');

var FeedActions = {
  fetchFeed: function (user_id) {
    feedUtil.fetchFeedInfo(feed_id, this.receiveFeedInfo);
  },
  receiveFeedInfo: function (feedinfo) {
    Dispatcher.dispatch({
      actionType: FeedConstants.USER_RECEIVED,
      feed: feedinfo
    });
  }
};

module.exports = FeedActions;
