var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var PlaylistIndexItem = require("./PlaylistIndexItem.jsx");
var PlaylistActions = require("../actions/PlaylistActions.js");

var PlaylistIndex = React.createClass({
  getInitialState: function(){
    return({
      playlists: []
    });
  },
  _onChange: function(){
    this.setState({playlists: PlaylistStore.all()});
  },
  componentWillMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    PlaylistActions.fetchAllPlaylists();
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  createPlaylists: function(playlists){
    var playlistList = playlists.map(function (playlist) {
         return <PlaylistIndexItem key={playlist.id} playlist={playlist} />;
       });
    return playlistList;
  },
  render: function(){
    return(
      <div>
        <h3 className="playlist-index-header" >All Playlists</h3>
        <ul className="playlist-list">
          {
            this.createPlaylists(this.state.playlists)
          }
        </ul>
      </div>
    );
  }
});

module.exports = PlaylistIndex;
