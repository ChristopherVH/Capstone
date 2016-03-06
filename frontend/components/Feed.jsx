var React = require('react');
var Song = require("./Song.jsx");
var FeedPlaylist = require("./FeedPlaylist.jsx");
var PlaylistStore = require("../stores/PlaylistStore.js");

var Feed = React.createClass({
  getInitialState: function(){
    return({
      feed: this.props.feed
    })
  },
  populateFeed: function(feed){
    var postFeed = feed.map(function(feedobj, index){
      if (feedobj.genre === undefined){
        return <FeedPlaylist key={index} playlist={feedobj} />;
      }else{
        return <Song key={index} song={feedobj}/>;
      }
    });
    return postFeed;
  },
  render: function(){
    return(
      <ul>
        {this.populateFeed(this.state.feed)}
      </ul>
    )
  }
})

module.exports = Feed;
