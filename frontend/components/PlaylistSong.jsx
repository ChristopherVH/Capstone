var React = require('react');

var PlaylistSong = React.createClass({
  getInitialState: function(){
    return({
      ord: this.props.song.ord,
      song: this.props.song.song,
      showAudio: false
    })
  },
  renderAudioTag: function(){
    if (this.state.showAudio === false){
      return <button className="play-button">▶</button>;
    }else {
      return  <audio controls autoPlay>
                <source src={this.state.song.audio_url} type="audio/mpeg"></source>
              </audio>;
    }
  },
  showAudioTag: function(){
    this.setState({showAudio: true})
  },
  render: function(){
    return(
      <div className="playlist-song">
        <div className="playlist-song-info">
          <div className="playlist-song-title">
            {this.state.song.title}
          </div>
          <div className="playlist-song-genre">
            {this.state.song.genre}
          </div>
        </div>
        <br/>
        <div className="playlist-song-thumbnail"><img src={this.state.song.image_url}></img></div>
        <br/>
        <div className="playlist-song-audio" onClick={this.showAudioTag}>
          {this.renderAudioTag()}
        </div>
      </div>
    );
  }
})

module.exports = PlaylistSong;
