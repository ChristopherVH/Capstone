var React = require('react');

var PlaylistSong = React.createClass({
  getInitialState: function(){
    return({
      ord: this.props.song.ord,
      song: this.props.song.song,
      playing: false
    })
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
      this.setState({playing: false});
    }else{
      this.setState({playing: true});
    }
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
        <div className="playlist-song-thumbnail"><img src={this.state.song.image_url}></img>
          <div className="playlist-song-audio" onClick={this.showAudioTag}>
            {this.renderAudioTag()}
          </div>
        </div>
      </div>
    );
  }
})

module.exports = PlaylistSong;
