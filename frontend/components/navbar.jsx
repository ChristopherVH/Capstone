var React = require('react');
var Link = require('react-router').Link;
var UserActions = require("../actions/UserActions.js");
// var Search = require("../")


var Navbar = React.createClass({
  getInitialState: function(){
    return({
      currentUser: this.props.currentUser
    })
  },
  createProfile: function(){
    if (this.state.currentUser === undefined || this.state.currentUser.id === undefined){
      return [<li key={1} ><a href="/session/new">Login</a></li>,
    <li key={2} ><a href="/users/new">Sign Up</a></li>];
    }
    return [<li key={1} ><Link to={"user/" + this.state.currentUser.id} >Profile
  </Link></li>, <li key={2} ><a onClick={this.signOut} href="#">Logout</a></li>];
  },
  signOut: function(){
		UserActions.signOut()
    this.setState({currentUser: undefined});
	},
  render: function(){
    return(
      <header>
        <ul>
          {this.createProfile()}
          <li><Link to="/" >Logo, Greetings</Link></li>
          <li><Link to="songs" >Songs</Link></li>
          <li><Link to="playlists" >Playlists</Link></li>
        </ul>
      </header>
    )
  }
})

module.exports = Navbar;
