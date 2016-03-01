var React = require('react');
var Link = require('react-router').Link;
var SingleUserStore = require("../stores/SingleUserStore.js");
var UserActions = require("../actions/UserActions.js");

var Navbar = React.createClass({
  getInitialState: function(){
    return({
      currentUser: undefined
    })
  },
  _onChange: function(){
    this.setState({currentUser: SingleUserStore.currentUser()})
  },
  componentDidMount: function(){
    this.userListener = SingleUserStore.addListener(this._onChange);
    UserActions.fetchCurrentUser()
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  createProfile: function(){
    if (this.state.currentUser === undefined){
      return <div></div>;
    }
    return <Link to={"/user/" + this.state.currentUser.id} >Profile
    </Link>;
  },
  render: function(){
    return(
      <header>
        <nav>
          <a href="/session/new">Login</a>
          <a href="/users/new">Sign Up</a>
          {this.createProfile()}
          <Link to="/" >Logo, Greetings
          </Link>
          <Link to="/songs" >Songs
          </Link>
          <Link to="/playlists" >Playlists
          </Link>
        </nav>
      </header>
    )
  }
})

module.exports = Navbar;
