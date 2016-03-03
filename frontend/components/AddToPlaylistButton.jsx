var React = require('react');
var PlaylistActions = require("../actions/PlaylistActions.js");
var UserActions = require("../actions/UserActions.js");

var playlistSongAdd = React.createClass({
  //TODO maybe get it so likes is a number that goes up/down one based on song's likes
  getInitialState: function(){
    return({
      added: undefined
    })
  },
  componentDidMount: function(){
    if (this.props.playlist.songIndex[this.props.songId]){
      this.setState({added: true})
    }else{
      this.setState({added: false})
    }
  },
  deleteSongFromPlaylist: function(){
    var playId = this.props.playlist.id;
    var songId = this.props.songId;
    this.props.playlist.songs.forEach(function(playlistsong){
      if (songId === playlistsong.song.id){
        PlaylistActions.deleteSongFromPlaylist(playId, playlistsong.id)
        return;
      }
    })
  },
  toggleAdd: function(){
    if (!(this.state.added)){
      PlaylistActions.addSongToPlaylist(this.props.songId, this.props.playlist.id, this.props.playlist.songs.length + 1)
      this.setState({added: true})
    }else{
      this.deleteSongFromPlaylist()
      this.setState({added: false})
    }
  },
  display: function(){
    if (this.state.added){
      return  <input type="button" onClick={this.toggleAdd} value="Added"/>;
    }else {
      return  <input type="button" onClick={this.toggleAdd} value="Add Song"/>;
    }
  },
  render: function(){
    return (
      <div>{this.display()}</div>
    )
  }
})

module.exports = playlistSongAdd;
