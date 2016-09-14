var React = require('react');
var SongStore = require("../stores/SongStore.js");
var SongActions = require("../actions/SongActions.js");
var Like = require("./Like.jsx");
var PlaylistModal = require("./PlaylistModal.jsx");
var NewPlaylistModal = require("./NewPlaylistModal.jsx");
var WaveSurfer = require("./WaveSurfer.jsx");

var singleSong = React.createClass({
  getInitialState: function(){
    return({
      song: undefined,
      playing: false
    });
  },
  componentWillMount: function(){
    this.songListener = SongStore.addListener(this._onChange);
    SongActions.fetchSong(this.props.params.song_id);
  },
  componentWillReceiveProps: function(newProps){
    SongActions.fetchSong(newProps.params.song_id);
  },
  _onChange: function(){
    this.setState({song: SongStore.find(this.props.params.song_id)});
  },
  renderAudioTag: function(){
    if (this.state.playing === false){
      return <button className="play-button"></button>;
    }else {
      return <button className="pause-button"></button>;
    }
  },
  componentWillUnmount: function(){
    this.songListener.remove();
  },
  showAudioTag: function(){
    if (this.state.playing === true){
      this.setState({playing: false});
    }else{
      this.setState({playing: true});
    }
  },
  render: function(){
    if(this.state.song === undefined){
      return <div></div>;
    }
    return(
      <div className="song-list">

        <div className="song-container move-right no-border">
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
            <img src={this.state.song.image_url}></img>
            <div className="audio-tag" onClick={this.showAudioTag}>
                {this.renderAudioTag()}
            </div>
          </div>
          <div className="audio-actions">
            <Like className="song-button" songId={this.state.song.id} userId={this.props.userId} />
            <NewPlaylistModal className="song-button" song={this.state.song} songId={this.state.song.id} userId={this.props.userId}/>
            <PlaylistModal className="song-button" song={this.state.song} songId={this.state.song.id}/>
          </div>
          <WaveSurfer song={this.state.song} playing={this.state.playing}/>
          <div className="uploader">Uploaded <em>by</em> {this.state.song.user.username}</div>
        </div>
      </div>
    );
  }
});

module.exports = singleSong;
