var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var Feed = require("./Feed.jsx");
var UserActions = require("../actions/UserActions.js");

var Profile = React.createClass({
  getInitialState: function(){
    return({
      user: SingleUserStore.access()
      //make a request
    })
  },
  _onChange: function(){
    this.setState({user: SingleUserStore.access()})
  },
  componentDidMount: function(){
    this.userListener = SingleUserStore.addListener(this._onChange);
    UserActions.fetchUserInfo(this.props.params.user_id)
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  render: function(){
    var user = this.state.user;
    return(
      <div>
        <img src={user.profile_url}></img>
        <img src={user.cover_url}> </img>
        <h1>{user.username}</h1>
      </div>
    )
  }
})

module.exports = Profile;
