var React = require('react');
var Song = require("./Song.jsx");
var PlaylistStore = require("../stores/PlaylistStore.js");
var SingleUserStore = require("../stores/SingleUserStore.js");
var PlaylistIndexItem = require('./PlaylistIndexItem.jsx');

var Feed = React.createClass({
  getInitialState: function(){
    return({
      playlists: this.props.feed.playlists,
      songs: this.props.feed.songs,
      likedSongs: this.props.feed.liked_songs
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
  populateFeed: function(songs, playlists, likedSongs){
    var that = this;
    var postFeed;
    var postFeedSongs = songs.map(function(feedobj, index){
        return <li className="feed-element"><Song key={index} song={feedobj} userId={that.props.userId}/></li>;
    });
    var postFeedPlaylist = playlists.map(function(feedobj, index){
        return <li className="feed-element"><PlaylistIndexItem key={index} playlist={feedobj} /></li>;
    });
    var postFeedLikes = likedSongs.map(function(feedobj, index){
        return <li className="feed-element"><Song key={index} song={feedobj} userId={that.props.userId}/></li>;
    });
    postFeed = postFeedSongs.concat(postFeedPlaylist).concat(postFeedLikes);
    return postFeed;
  },
  updateFeed: function(){
    this.setState({playlists: PlaylistStore.all()});
  },
  render: function(){
    return(
      <ul className="feed">
        {this.populateFeed(this.state.songs, this.state.playlists, this.state.likedSongs)}
      </ul>
    );
  }
});

module.exports = Feed;
