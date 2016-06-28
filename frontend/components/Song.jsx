var React = require('react');
var SongStore = require("../stores/SongStore.js");
var ApiUtil = require("../util/apiUtil.js");
var Like = require("./Like.jsx");
var PlaylistModal = require("./PlaylistModal.jsx");
var NewPlaylistModal = require("./NewPlaylistModal.jsx");
var WaveSurfer = require("./WaveSurfer.jsx");

var Song = React.createClass({
  getInitialState: function(){
    return({
      song: this.props.song,
      playing: false
    });
  },
  singleSongRedirect: function(){
    window.location = '/#/songs/' + this.props.song.id;
  },
  componentWillReceiveProps: function(newProps){
    this.setState({song: newProps.song});
  },
  renderAudioTag: function(){
    if (this.state.playing === false){
      return <button className="play-button"></button>;
    }
  },
  showAudioTag: function(){
    this.setState({playing: true});
  },
  render: function(){
    return(
      <div className="song-container">
        <div className="feed-song-info">
          <div className="feed-song-title">
            {this.state.song.title}
          </div>
          <div className="feed-song-artist">
            <div className="inner-artist-text">
              <em>by</em>
              {this.state.song.artist}
            </div>
          </div>
        </div>
        <div className="song-thumbnail">
          <img src={this.state.song.image_url} onDoubleClick={this.singleSongRedirect} ></img>
          <div className="audio-tag" onClick={this.showAudioTag}>
              {this.renderAudioTag()}
          </div>
        </div>
        <div className="audio-actions">
          <Like className="song-button" songId={this.state.song.id} userId={this.props.userId} />
          <NewPlaylistModal className="song-button" songId={this.state.song.id} userId={this.props.userId}/>
          <PlaylistModal className="song-button" songId={this.state.song.id}/>
        </div>
        <WaveSurfer song={this.state.song} playing={this.state.playing}/>
        <div className="uploader">Uploaded <em>by</em> {this.state.song.user.username}</div>
      </div>
    );
  }
})
// numbLikes={this.state.song.likers.length}

module.exports = Song;
