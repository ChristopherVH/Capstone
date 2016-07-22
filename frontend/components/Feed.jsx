var React = require('react');
var Song = require("./Song.jsx");
var PlaylistStore = require("../stores/PlaylistStore.js");
var SingleUserStore = require("../stores/SingleUserStore.js");
var PlaylistIndexItem = require('./PlaylistIndexItem.jsx');
var PlaylistActions = require("../actions/PlaylistActions.js");

var Feed = React.createClass({
  getInitialState: function(){
    return({
      playlists: this.props.feed.playlists,
      allSongs: this.props.allSongs,
    });
  },
  componentWillMount: function(){
    this.populateFeed(this.props.allSongs, this.props.feed.playlists);
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    PlaylistActions.fetchUserPlaylists(SingleUserStore.currentUser().id);
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  _onChange: function(){
    this.setState({playlists: PlaylistStore.all()});
    //Store updating as expected
    //running populateFeed before state is being set
  },
  populateFeed: function(allSongs, playlists){
    var that = this;
    var postFeed = [];
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
    // postFeed always coming back as expected
    var jsxPostFeed = [];
    var mock = [];
    postFeed.forEach(function(feedobj, index){
      if (feedobj.description !== undefined){
        jsxPostFeed.push(<li className="feed-element"><PlaylistIndexItem playlist={feedobj} /></li>);
      }else{
        feedobj["user"] = {"username" : that.props.username};
        jsxPostFeed.push(<li className="feed-element"><Song key={index} song={feedobj} userId={that.props.userId}/></li>);
      }
    });
    return jsxPostFeed;
  },
  render: function(){
    //playlists updating as expected
    return(
      <ul className="feed">
        {this.populateFeed(this.state.allSongs, this.state.playlists)}
      </ul>
    );
  }
});

module.exports = Feed;
