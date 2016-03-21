var React = require('react');
var SongStore = require("../stores/SongStore.js");
var Song = require("./Song.jsx");
var SongActions = require("../actions/SongActions.js");

var SongIndex = React.createClass({
  getInitialState: function(){
    return({
      songs: SongStore.all()
    })
  },
  _onChange: function(){
    this.setState({songs: SongStore.all()})
  },
  componentDidMount: function(){
    this.songListener = SongStore.addListener(this._onChange);
    //didn't match flux pattern when calling util inside
    SongActions.fetchAllSongs()
  },
  componentWillUnmount: function(){
    this.songListener.remove();
  },
  render: function(){
    var songsList = this.state.songs.map(function (song, index) {
         return <Song key={song.id} song={song} />;
       });
    return(
      <div>
        <h3 className="song-index-header" >All Songs</h3>
        <ul className="song-list">
          {songsList}
        </ul>
      </div>
    )
  }
})

module.exports = SongIndex;
