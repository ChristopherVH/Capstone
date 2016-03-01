var React = require('react'),
    ReactDOM = require('react-dom');

  var Router = require('react-router').Router;
  var Route = require('react-router').Route;
  var IndexRoute = require('react-router').IndexRoute;
  var App = require("./components/App.jsx");
  var Navbar = require("./components/Navbar.jsx");
  var PlayBar = require("./components/Playbar.jsx");
  var Greeting = require("./components/Greeting.jsx");
  var Collection = require("./components/Collection.jsx");
  var Profile = require("./components/Profile.jsx");
  var PlaylistIndex = require("./components/PlaylistIndex.jsx");
  var SinglePlaylist = require('./components/SinglePlaylist.jsx');
  var SongIndex = require("./components/SongIndex.jsx");
  var SingleSong = require("./components/SingleSong.jsx");

// <Router history={browserHistory}>
//   <Route path="/" component={App}>
//   <IndexRoute component={Home}/>
//   <Route path="accounts" component={Accounts}/>
//   <Route path="statements" component={Statements}/>
// </Route>

// <IndexRoute component={ Greeting }/>
// <Route path="collection" component={ Collection }/>
// <Route path="users/:id" component={ Profile } />
// <Route path="songs/:id" component={ Song }/>
// <Route path="playlists/:id" component={ Playlist}/>

//TODO make it so when they go back it redirects to greeting page

var routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ Greeting }/>
      <Route path="user/:user_id" component={ Profile }>
      </Route>
      <Route path="playlists" component={PlaylistIndex}/>
      <Route path="playlists/:playlist_id" component={SinglePlaylist}/>
      <Route path="songs" component={SongIndex}/>
      <Route path="songs/:song_id" component={SingleSong}/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  )
});
