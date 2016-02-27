var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");
var PlaylistActions = require("../actions/PlaylistActions.js");

var SinglePlaylist = React.createClass({
  getInitialState: function(){
    return({
      playlist: undefined
    })
  },
  _onChange: function(){
    this.setState({playlist: PlaylistStore.oneList()})
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    PlaylistActions.fetchOnePlaylist(this.props.params.playlist_id);
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  createSongList: function(){
     var playlistSongs = this.state.playlist.songs.map(function (song) {
        return <PlaylistSong key={song.id} id={song.id} song={song}/>;
      });
    return playlistSongs;
  },
  render: function(){
    if (this.state.playlist === undefined){
      return <div></div>;
    }
    return(
      <div>
        {this.state.playlist.title}
        <br/>
        {this.state.playlist.description}
        <br/>
        {this.createSongList()}
      </div>
    );
  }
})

module.exports = SinglePlaylist;
