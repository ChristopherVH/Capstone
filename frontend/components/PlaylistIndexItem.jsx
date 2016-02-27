var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");

var Playlist = React.createClass({
  getInitialState: function(){
    return({
      playlist: PlaylistStore.find(this.props.id)
    })
  },
  _onChange: function(){
    this.setState({playlists: PlaylistStore.find(this.props.id)})
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    PlaylistActions.fetchPlaylist()
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  render: function(){
    var songs = this.state.songs;
    var songsList = this.state.playlist.songs.map(function (song) {
         return <PlaylistSong key={song.id} id={song.id} song={song}/>;
       });
    return(
      <div>
        {this.state.playlist.title}
        <br/>
        {this.state.playlist.description}
        <br/>
        {songsList}
      </div>
    );
  }
})

module.exports = Playlist;
