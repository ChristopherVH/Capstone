var React = require('react');
var SongStore = require("../stores/SongStore.js");
var ApiUtil = require("../util/apiUtil.js");
var SoundCloudAudio = require('soundcloud-audio');

var Song = React.createClass({
  getInitialState: function(){
    return({
      song: this.props.song
    })
  },
  render: function(){
    return(
      <div>
        {this.state.song.title}
        <br/>
        <img src={this.state.song.image_url}></img>
        <br/>
        <audio controls>
          <source src={this.state.song.audio_url} type="audio/mpeg"></source>
        </audio>
      </div>
    );
  }
})

module.exports = Song;
