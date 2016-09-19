var React = require('react');

var PlaylistSong = React.createClass({
  getInitialState: function(){
    return({
      playing: false
    });
  },
  renderAudioTag: function(){
    if (this.state.playing === true && this.props.currentSong === this.props.song){
      return <button className="pause-button"></button>;
    }else {
      return <button className="play-button"></button>;
    }
  },
  showAudioTag: function(){
    if (this.state.playing === true){
      this.setState({playing: false});
      this.props.setPlaying(false);
    }else{
      this.setState({playing: true});
      this.props.setPlaying(true);
    }
    this.props.setCurrentSongWave(this.props.song);
  },
  render: function(){
    return(
      <div className="playlist-song">
        <div className="playlist-song-info">
          <div className="playlist-song-title">
            {this.props.song.title}
          </div>
          <div className="playlist-song-genre"><em>by</em>
            {this.props.song.artist}
          </div>
        </div>
        <div className="playlist-song-thumbnail"><img src={this.props.song.image_url}></img>
          <div className="playlist-song-audio" onClick={this.showAudioTag}>
            {this.renderAudioTag()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PlaylistSong;
