var React = require('react');

var PlaylistSong = React.createClass({
  getInitialState: function(){
    return({
      ord: this.props.song.ord,
      song: this.props.song.song
    })
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
        <div className="playlist-song-audio">
          <audio controls>
            <source src={this.state.song.audio_url} type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
    );
  }
})

module.exports = PlaylistSong;
