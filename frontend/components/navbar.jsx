var React = require('react');
var Link = require('react-router').Link;
var UserActions = require("../actions/UserActions.js");
var SearchBar = require("./SearchBar.jsx");


var Navbar = React.createClass({
  // getInitialState: function(){
  //   return({
  //     currentUser: this.props.currentUser
  //   })
  // },
  createProfile: function(){
    if (this.props.currentUser === undefined || this.props.currentUser.id === undefined){
      return [<li key={2} ><a href="users/new.htm">Sign Up</a></li>,<li id="login" key={1} ><a href="session/new.htm">Sign In</a></li>];
    }
    return [<li key={1} ><Link to={"/user/" + this.props.currentUser.id} >Profile
  </Link></li>, <li id="logout" key={2}><a onClick={this.signOut}>Logout</a></li>];
  },
  signOut: function(){
		UserActions.signOut();
	},
  render: function(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid nav-container">
          <ul className="navbar-header">
            <li><Link className="navbar-brand" to="/" >Nimbus Playlist</Link></li>
          </ul>
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">

              <li><Link to="/songs" >Songs</Link></li>
              <li><Link to="/playlists" >Playlists</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.createProfile()}
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <SearchBar/>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar;
