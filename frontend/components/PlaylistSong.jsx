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
      <div>
        {this.state.ord}
        <br/>
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

module.exports = PlaylistSong;
