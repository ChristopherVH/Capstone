var React = require('react');
var PlaylistStore = require("../stores/PlaylistStore.js");
var ApiUtil = require("../util/apiUtil.js");
var PlaylistSong = require("./PlaylistSong.jsx");
var PlaylistActions = require("../actions/PlaylistActions.js");

var FeedPlaylist = React.createClass({
  getInitialState: function(){
    return({
      playlist: undefined
    })
  },
  _onChange: function(){
    this.setState({playlist: PlaylistStore.find(this.props.playlistId)})
  },
  componentDidMount: function(){
    this.playlistListener = PlaylistStore.addListener(this._onChange);
    PlaylistActions.fetchPlaylist(this.props.playlistId);
  },
  componentWillUnmount: function(){
    this.playlistListener.remove();
  },
  createSongList: function(){
     var playlistSongs = this.state.playlist.songs.map(function (song, index) {
        return <PlaylistSong key={index} idx={song.id} song={song}/>;
      });
    return playlistSongs;
  },
  render: function(){
    if (this.state.playlist === undefined){
      return <div></div>;
    }
    return(
      <div>
        {this.state.playlist.title}
        <br/>
        {this.state.playlist.description}
        <br/>
        {this.createSongList()}
      </div>
    );
  }
})

module.exports = FeedPlaylist;
