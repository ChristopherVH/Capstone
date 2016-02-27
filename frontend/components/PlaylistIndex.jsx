var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var PlaylistIndexItem = require("./PlaylistIndexItem.jsx");
var PlaylistActions = require("../actions/PlaylistActions.js");

var PlaylistIndex = React.createClass({
  getInitialState: function(){
    return({
      playlists: PlaylistStore.all()
    })
  },
  _onChange: function(){
    this.setState({playlists: PlaylistStore.all()})
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    //didn't match flux pattern when calling util inside
    PlaylistActions.fetchAllPlaylists()
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  render: function(){
    var playlists = this.state.playlists;
    var playlistList = playlists.map(function (playlist) {
         return <PlaylistIndexItem key={playlist.id} id={playlist.id} />;
       });
    return(
      <ul>
        {playlistList}
      </ul>
    )
  }
})

module.exports = PlaylistIndex;
