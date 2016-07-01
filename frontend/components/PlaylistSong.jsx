var React = require('react');

var PlaylistSong = React.createClass({
  getInitialState: function(){
    return({
      ord: this.props.song.ord,
      playing: false
    });
  },
  renderAudioTag: function(){
    if (this.state.playing === false){
      return <button className="play-button"></button>;
    }else {
      return <button className="pause-button"></button>;
    }
  },
  showAudioTag: function(){
    if (this.state.playing === true){
      this.props.setPlaying(false);
      this.setState({playing: false});
    }else{
      this.props.setPlaying(true);
      this.setState({playing: true});
    }
    if (this.props.song.song !== undefined){
      this.props.setCurrentSongWave(this.props.song.song);
    }else{
      this.props.setCurrentSongWave(this.props.song);
    }
  },
  render: function(){
    return(
      <div className="playlist-song">
        <div className="playlist-song-info">
          <div className="playlist-song-title">
            {this.props.song.title}
          </div>
          <div className="playlist-song-genre">
            {this.props.song.genre}
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
})

module.exports = PlaylistSong;
