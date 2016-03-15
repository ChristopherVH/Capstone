var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");
var PlaylistActions = require("../actions/PlaylistActions.js");

var FeedPlaylist = React.createClass({
  getInitialState: function(){
    return({
      playlist: this.props.playlist
    })
  },
  _onChange: function(){
    this.setState({playlist: PlaylistStore.find(this.props.playlist.id)})
  },
  componentWillReceiveProps: function(newProps){
    this.setState({playlist: newProps.playlist});
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  createSongList: function(){
     var playlistSongs = this.state.playlist.songs.map(function (song, index) {
        return <PlaylistSong key={index} idx={song.id} ord={index} song={song} />;
      });
    return playlistSongs;
  },
  singlePlaylistRedirect: function(){
    window.location = '/#/playlists/' + this.props.playlist.id
  },
  display: function(){
    if (this.state.playlist.songs === undefined){
      return[<h3 key={1} onDoubleClick = {this.singlePlaylistRedirect}>
        {this.state.playlist.title}
      </h3>,<div key={2}>
        {this.state.playlist.description}
      </div>];
    }else {
      return[<h3 key={1} onDoubleClick = {this.singlePlaylistRedirect}>
        {this.state.playlist.title}
      </h3>,<div key={2} >
        {this.state.playlist.description}
      </div>,<div key={3} >
        {this.createSongList()}
      </div>];
    }
  },
  render: function(){
    return(
      <div>
        {this.display()}
      </div>
    );
  }
})

module.exports = FeedPlaylist;
