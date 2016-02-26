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



var routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ Greeting }/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  )
});
