var React = require('react'),
    Navbar = require("./Navbar.jsx"),
    Playbar = require("./Playbar.jsx"),
    Greeting = require("./Greeting.jsx");
var SingleUserStore = require("../stores/SingleUserStore.js");
var UserActions = require("../actions/UserActions.js");

var App = React.createClass({
  getInitialState: function() {
    return({currentUser: undefined });
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
  render: function(){
    if (this.state.currentUser === undefined){
      return <div></div>;
    }
    return (
    <div className="page-background">
      <Navbar currentUser ={this.state.currentUser}/>
      {this.props.children}
    </div>
  );
  }
})
module.exports = App;
