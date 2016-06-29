var React = require('react');
var Song = require("./Song.jsx");
var FeedPlaylist = require("./FeedPlaylist.jsx");
var PlaylistStore = require("../stores/PlaylistStore.js");
var SingleUserStore = require("../stores/SingleUserStore.js");

var Feed = React.createClass({
  getInitialState: function(){
    return({
      feed: this.props.feed
    })
  },
  componentWillReceiveProps: function(newProps){
    this.setState({feed: newProps.feed});
  },
  populateFeed: function(feed){
    var that = this;
    var postFeed;
    var postFeedSongs = feed.songs.map(function(feedobj, index){
        return <li className="feed-element"><Song key={index} song={feedobj} userId={that.props.userId}/></li>;
    });
    var postFeedPlaylist = feed.playlists.map(function(feedobj, index){
        return <li className="feed-element"><FeedPlaylist key={index} playlist={feedobj} /></li>;
    });
    var postFeedLikes = feed.liked_songs.map(function(feedobj, index){
        return <li className="feed-element"><Song key={index} song={feedobj} userId={that.props.userId}/></li>;
    });
    postFeed = postFeedSongs.concat(postFeedPlaylist).concat(postFeedLikes);
    return postFeed;
  },
  render: function(){
    return(
      <ul className="feed">
        {this.populateFeed(this.state.feed)}
      </ul>
    )
  }
})

module.exports = Feed;
