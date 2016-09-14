var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");
var PlaylistActions = require("../actions/PlaylistActions.js");
var WaveSurfer = require("./WaveSurfer.jsx");

var singlePlaylist = React.createClass({
  getInitialState: function(){
    return({
      playlist: undefined,
      playing: false
    });
  },
  _onChange: function(){
    var playlist1 = PlaylistStore.find(this.props.params.playlist_id);
    this.setState({playlist: playlist1, currentSong: playlist1.songs[0].song});
  },
  componentWillMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    PlaylistActions.fetchPlaylist(this.props.params.playlist_id);
  },
  fillState: function(){
    var that = this;
    return (this.state.playlist.songs.map(function (song,index) {
        return <PlaylistSong key={index} song={song.song} playing={that.state.playing} currentSong={that.state.currentSong}
          setCurrentSongWave={that.setCurrentSongWave} setPlaying={that.setPlaying}/>;
    }));
  },
  setCurrentSongWave: function(song){
    this.setState({currentSong: song});
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  setPlaying: function(playingBoolean){
    this.setState({playing: playingBoolean});
  },
  render: function(){
    if(this.state.playlist === undefined){
      return <div></div>;
    }
    return(
      <div className="playlist-list">
        <div className="single-playlist-container">
          <div className="playlist-info">
            <h3 className="playlist-title" >{this.state.playlist.title + " "}:</h3>
            <div className="playlist-description">{this.state.playlist.description}</div>
          </div>
          <div className="current-list-image"><img src={this.state.currentSong.image_url}></img></div>
          <div className="playlist-wave">
            <WaveSurfer playlistId={this.state.playlist.id} song={this.state.currentSong} playing = {this.state.playing}>
            </WaveSurfer>
          </div>
          {this.fillState()}
        </div>
      </div>
    );
  }
});

module.exports = singlePlaylist;
