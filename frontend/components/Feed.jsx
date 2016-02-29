var React = require('react');
var Song = require("./Song.jsx");
var FeedPlaylist = require("./FeedPlaylist.jsx");

var Feed = React.createClass({
  getInitialState: function(){
    return({
      feed: this.props.feed
    })
  },
  populateFeed: function(feed){
    var wow = feed.map(function(feedobj, index){
      if (feedobj.genre === undefined){
        return <FeedPlaylist key={index} playlistId={feedobj.id} />;
      }else{
        return <Song key={index} song={feedobj}/>;
      }
    });
    return wow;
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
