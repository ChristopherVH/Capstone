var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");
var WaveSurfer = require('./WaveSurfer.jsx');

var Playlist = React.createClass({
  getInitialState: function(){
    return({
      playlist: this.props.playlist,
      currentSong: undefined,
      playing: false
    });
  },
  componentWillMount: function(){
    if (this.state.playlist.songs[0].song !== undefined){
      this.setState({currentSong: this.state.playlist.songs[0].song});
    }else {
      this.setState({currentSong: this.state.playlist.songs[0]});
    }
  },
  singlePlaylistRedirect: function(){
    window.location = '/#/playlists/' + this.props.playlist.id;
  },
  fillState: function(){
    var that = this;
    return (this.state.playlist.songs.map(function (song,index) {
      if (song.song !== undefined){
        return <PlaylistSong key={index} song={song.song} playing={that.state.Playing} currentSong={that.state.currentSong}
          setCurrentSongWave={that.setCurrentSongWave}/>;
      }else {
        return <PlaylistSong key={index} song={song} playing={that.state.Playing} currentSong={that.state.currentSong}
          setCurrentSongWave={that.setCurrentSongWave}/>;
      }
    }));
  },
  shouldComponenetUpdate: function(nextProps, nextState){
    if (nextState.currentSong !== this.state.currentSong){
      this.setState({playing: false});
    }
  },
  setCurrentSongWave: function(song){
    this.setState({currentSong: song});
  },
  setPlaying: function(playingBoolean){
    this.setState({playing: playingBoolean});
  },
  render: function(){
    return(
      <div className="playlist-container">
        <div className="playlist-info">
          <h3 className="playlist-title" onDoubleClick = {this.singlePlaylistRedirect} >{this.state.playlist.title}</h3>
          <div className="playlist-description">{this.state.playlist.description}</div>
        </div>
        <div className="current-list-image"><img src={this.state.currentSong.image_url}></img></div>
        <div className="playlist-wave">
          <WaveSurfer song={this.state.currentSong} playing = {this.state.playing}>
          </WaveSurfer>
        </div>
        {this.fillState()}
      </div>
    );
  }
})

module.exports = Playlist;
