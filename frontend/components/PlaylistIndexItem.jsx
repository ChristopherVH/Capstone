var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");

var Playlist = React.createClass({
  getInitialState: function(){
    return({
      playlist: this.props.playlist
    })
  },
  singlePlaylistRedirect: function(){
    window.location = '/#/playlists/' + this.props.playlist.id
  },
  render: function(){
    var songsList = this.state.playlist.songs.map(function (song) {
         return <PlaylistSong key={song.ord} song={song}/>;
       });
    return(
      <div>
        <h3 onDoubleClick = {this.singlePlaylistRedirect} >{this.state.playlist.title}</h3>
        {this.state.playlist.description}
        <br/>
        {songsList}
      </div>
    );
  }
})

module.exports = Playlist;
