var React = require('react');
var SongStore = require("../stores/SongStore.js");
var ApiUtil = require("../util/apiUtil.js");
var Like = require("./Like.jsx");
var PlaylistModal = require("./PlaylistModal.jsx");

var Song = React.createClass({
  getInitialState: function(){
    return({
      song: this.props.song
    })
  },
  singleSongRedirect: function(){
    window.location = '/#/songs/' + this.props.song.id
  },
  render: function(){
    return(
      <div>
        {this.state.song.title}
        <br/>
        <img src={this.state.song.image_url} onDoubleClick={this.singleSongRedirect} ></img>
        <br/>
        <audio controls>
          <source src={this.state.song.audio_url} type="audio/mpeg"></source>
        </audio>
        <Like songId={this.state.song.id} />
        <PlaylistModal songId={this.state.song.id}/>
      </div>
    );
  }
})

module.exports = Song;
