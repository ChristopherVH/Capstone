var React = require('react');
var Song = require("./Song.jsx");
var PlaylistStore = require("../stores/PlaylistStore.js");
var SingleUserStore = require("../stores/SingleUserStore.js");
var PlaylistIndexItem = require('./PlaylistIndexItem.jsx');
var PlaylistActions = require("../actions/PlaylistActions.js");

var Feed = React.createClass({
  getInitialState: function(){
    return({
      jsxPostFeed: []
    });
  },
  componentWillMount: function(){
    this.populateFeed(this.props.allSongs, this.props.feed.playlists);
  },
  componentWillReceiveProps: function(newProps){
    this.populateFeed(newProps.allSongs, newProps.playlists);
  },
  componentDidMount: function(){
    if (SingleUserStore.access().id === SingleUserStore.currentUser().id){
      this.playlistListener = PlaylistStore.addListener(this._onChange);
      PlaylistActions.fetchUserPlaylists(SingleUserStore.access().id);
    }
  },
  _onChange: function(){
    this.populateFeed(this.props.allSongs, PlaylistStore.all());
  },
  componentWillUnmount: function(){
    if (SingleUserStore.access().id === SingleUserStore.currentUser().id){
      this.playlistListener.remove();
    }
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
    this.setState({jsxPostFeed: jsxPostFeed});
  },
  render: function(){
    return(
      <ul className="feed">
        {this.state.jsxPostFeed}
      </ul>
    );
  }
});

module.exports = Feed;
