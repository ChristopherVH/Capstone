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
      // song: this.props.song,
      playing: false
    });
  },
  singleSongRedirect: function(){
    window.location = '/#/songs/' + this.props.song.id;
  },
  // componentWillReceiveProps: function(newProps){
  //   this.setState({song: newProps.song});
  // },
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
      <div className="song-container">
        <div className="feed-song-info">
          <div className="feed-song-title">
            {this.props.song.title}
          </div>
          <div className="feed-song-artist">
            <div className="inner-artist-text">
              <em>by</em>
              {this.props.song.artist}
            </div>
          </div>
        </div>
        <div className="song-thumbnail">
          <img src={this.props.song.image_url} onDoubleClick={this.singleSongRedirect} ></img>
          <div className="audio-tag" onClick={this.showAudioTag}>
              {this.renderAudioTag()}
          </div>
        </div>
        <div className="audio-actions">
          <Like className="song-button" songId={this.props.song.id} userId={this.props.userId} />
          <NewPlaylistModal className="song-button" song={this.props.song} songId={this.props.song.id} userId={this.props.userId}/>
          <PlaylistModal className="song-button" song={this.props.song} songId={this.props.song.id}/>
        </div>
        <WaveSurfer song={this.props.song} playing={this.state.playing}/>
        <div className="uploader">Uploaded <em>by</em> {this.props.song.user.username}</div>
      </div>
    );
  }
});

module.exports = Song;
