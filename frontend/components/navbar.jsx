var React = require('react');
var Link = require('react-router').Link;
var UserActions = require("../actions/UserActions.js");
var SearchBar = require("./SearchBar.jsx");


var Navbar = React.createClass({
  getInitialState: function(){
    return({
      currentUser: this.props.currentUser
    })
  },
  createProfile: function(){
    if (this.props.currentUser === undefined || this.props.currentUser.id === undefined){
      return [<li key={2} ><a href="users/new">Sign Up</a></li>,<li key={1} ><a href="session/new">Login</a></li>];
    }
    return [<li key={1} ><Link to={"user/" + this.state.currentUser.id} >Profile
  </Link></li>, <li onClick={this.signOut} key={2} ><div id="logout" >Logout</div></li>];
  },
  signOut: function(){
		UserActions.signOut();
	},
  render: function(){
    return(
      <header>
        <ul>
          <li id="logo"><Link to="/" >Sound Nimbus</Link></li>
          <li id="searchbar"><SearchBar/></li>
          <li><Link to="songs" >Songs</Link></li>
          <li><Link to="playlists" >Playlists</Link></li>
          {this.createProfile()}
        </ul>
        <div id="stay">
        </div>
      </header>
    )
  }
})

module.exports = Navbar;
