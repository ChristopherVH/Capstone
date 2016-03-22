var React = require('react');
var SongStore = require("../stores/SongStore.js");
var SongActions = require("../actions/SongActions.js");
var Like = require("./Like.jsx");
var PlaylistModal = require("./PlaylistModal.jsx");
var NewPlaylistModal = require("./NewPlaylistModal.jsx");

var Song = React.createClass({
  getInitialState: function(){
    return({
      song: undefined,
      showAudio: false
    })
  },
  _onChange: function(){
    this.setState({song: SongStore.find(this.props.params.song_id)})
  },
  componentWillReceiveProps: function(newProps){
    SongActions.fetchSong(newProps.params.song_id)
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
      <div className="single-song">
        <div className='song-container'>
          <div className="feed-song-info">
            <div className="feed-song-title">{this.state.song.title}</div>
            <div className="feed-song-artist">{this.state.song.artist}</div>
          </div>
          <br/>
          <div className="song-thumbnail"><img src={this.state.song.image_url}></img>
          </div>
          <div className="audio-actions">
            <Like songId={this.state.song.id} />
            <NewPlaylistModal songId={this.state.song.id}/>
            <PlaylistModal/>
            <br/>
            <div className="audio-tag" onClick={this.showAudioTag}>
              {this.renderAudioTag()}
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Song;
