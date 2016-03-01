var React = require('react');
var SongStore = require("../stores/SongStore.js");
var SongActions = require("../actions/SongActions.js");
var Like = require("./Like.jsx");
var PlaylistModal = require("./PlaylistModal.jsx");

var Song = React.createClass({
  getInitialState: function(){
    return({
      song: undefined
    })
  },
  _onChange: function(){
    this.setState({song: SongStore.find(this.props.params.song_id)})
  },
  componentDidMount: function(){
    this.songListener = SongStore.addListener(this._onChange);
    SongActions.fetchSong(this.props.params.song_id);
  },
  componentWillUnmount: function(){
    this.songListener.remove();
  },
  render: function(){
    if (this.state.song === undefined){
      return <div></div>;
    }
    return(
      <div>
        {this.state.song.title}
        <br/>
        <img src={this.state.song.image_url}></img>
        <br/>
        <audio controls>
          <source src={this.state.song.audio_url} type="audio/mpeg"></source>
        </audio>
        <Like songId={this.state.song.id} />
        <PlaylistModal/>
      </div>
    );
  }
})

module.exports = Song;
