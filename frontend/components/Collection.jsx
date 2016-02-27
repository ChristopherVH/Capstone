var React = require('react');
var SongStore = require("../stores/SongStore.js");
var Song = require("./Song.jsx");
var SongActions = require("../actions/SongActions.js");

var Collection = React.createClass({
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
    SongActions.fetchTrendingSongs()
  },
  componentWillUnmount: function(){
    this.songListener.remove();
  },
  render: function(){
    var songsList = this.state.songs.map(function (song) {
         return <Song key={song.id} id={song.id} />;
       });
    return(
      <ul>
        {songsList}
      </ul>
    )
  }
})

module.exports = Collection;
