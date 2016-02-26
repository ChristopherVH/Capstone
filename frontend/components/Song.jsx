var React = require('react');
var SongStore = require("../stores/SongStore.js");
var ApiUtil = require("../util/apiUtil.js");

var Song = React.createClass({
  getInitialState: function(){
    return({
      song: SongStore.find(this.props.id)
    })
  },
  _onChange: function(){
    this.setState({songs: SongStore.find(this.props.id)})
  },
  componentDidMount: function(){
    this.songListener = SongStore.addListener(this._onChange);
    // ApiUtil.fetchSong(this.props.id)
  },
  componentWillUnmount: function(){
    this.songListener.remove();
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
