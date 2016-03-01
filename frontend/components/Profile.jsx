var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var Feed = require("./Feed.jsx");
var UserActions = require("../actions/UserActions.js");

var Profile = React.createClass({
  getInitialState: function(){
    return({
      user: undefined
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
    if (this.state.user === undefined || this.state.user.id === undefined){
      return <div></div>;
    }
    var user = this.state.user;
    var profileimage = function(){
      if (user.cover_url){
        return <img src={user.cover_url}></img>;
      }
    }
    var profilecover = function(){
      if (user.profile_url){
        return <img src={user.profile_url}></img>;
      }
    }
    return(
      <div>
        <h1>{user.username}</h1>
        {profileimage()}
        {profilecover()}
        <Feed feed={user.feed}/>
      </div>
    );
  }
})

module.exports = Profile;
