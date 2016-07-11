var React = require('react');
var Song = require("./Song.jsx");
var PlaylistStore = require("../stores/PlaylistStore.js");
var SingleUserStore = require("../stores/SingleUserStore.js");
var PlaylistIndexItem = require('./PlaylistIndexItem.jsx');

var Feed = React.createClass({
  getInitialState: function(){
    console.log(this.props.allSongs);
    return({
      playlists: this.props.feed.playlists,
      songs: this.props.feed.songs,
      likedSongs: this.props.feed.liked_songs,
      allSongs: this.props.allSongs
    });
  },
  componentWillReceiveProps: function(newProps){
    this.setState({feed: newProps.feed});
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  _onChange: function(){
    this.updateFeed();
  },
  populateFeed: function(allSongs, playlists){
    var that = this;
    var postFeed;
    postFeed = allSongs.concat(playlists);
    postFeed = postFeed.sort(function (a, b) {
      if (a.created_at > b.created_at) {
        return -1;
      }
      if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    });
    var jsxPostFeed = postFeed.map(function(feedobj, index){
      if (feedobj.description !== undefined){
        return <li className="feed-element"><PlaylistIndexItem key={index} playlist={feedobj} /></li>;
      }else{
        feedobj["user"] = {"username" : that.props.username};
        return <li className="feed-element"><Song key={index} song={feedobj} userId={that.props.userId}/></li>;
      }
    });
    return jsxPostFeed;
  },
  updateFeed: function(){
    this.setState({playlists: PlaylistStore.all()});
  },
  render: function(){
    return(
      <ul className="feed">
        {this.populateFeed(this.state.allSongs, this.state.playlists)}
      </ul>
    );
  }
});

module.exports = Feed;
