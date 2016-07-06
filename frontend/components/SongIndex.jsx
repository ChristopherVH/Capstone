var React = require('react');
var SongStore = require("../stores/SongStore.js");
var SingleUserStore = require("../stores/SingleUserStore.js");
var Song = require("./Song.jsx");
var SongActions = require("../actions/SongActions.js");
var UserActions = require("../actions/UserActions.js");

var SongIndex = React.createClass({
  getInitialState: function(){
    return({
      songs: SongStore.all(),
      userId: SingleUserStore.currentUser().id
    });
  },
  _onChange: function(){
    this.setState({songs: SongStore.all()});
  },
  componentWillMount: function(){
    UserActions.fetchCurrentUser();
  },
  componentDidMount: function(){
    this.songListener = SongStore.addListener(this._onChange);
    SongActions.fetchAllSongs();
  },
  componentWillUnmount: function(){
    this.songListener.remove();
  },
  songsList: function(){
    var that = this;
    var songsList = this.state.songs.map(function (song, index) {
         return <Song key={song.id} song={song} userId={that.state.userId}/>;
       });
    return songsList;
  },
  render: function(){
    return(
      <div>
        <h3 className="song-index-header" >All Songs</h3>
        <ul className="song-list">
          {this.songsList()}
        </ul>
      </div>
    );
  }
});

module.exports = SongIndex;
