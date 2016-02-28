var React = require('react');
var Song = require("./Song.jsx");
var PlaylistIndexItem = require("./PlaylistIndexItem.jsx");

var Feed = React.createClass({
  getInitialState: function(){
    return({
      feed: this.props.feed
    })
  },
  populateFeed: function(feed){
    var wow = feed.map(function(feedobj){
      if (feedobj.genre === undefined){
        debugger;
        return <PlaylistIndexItem key={feedobj.ord} playlist={feedobj} />;
      }else{
        return <Song key={feedobj.id} song={feedobj}/>;
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
