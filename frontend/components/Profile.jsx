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
  componentWillReceiveProps: function(newProps){
    UserActions.fetchUserInfo(newProps.params.user_id)
  },
  componentDidMount: function(){
    this.userListener = SingleUserStore.addListener(this._onChange);
    UserActions.fetchUserInfo(this.props.params.user_id)
  },
  cloudinaryOpen: function(){

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
        return <div className="cover-photo-container"><img src={user.cover_url} onClick={this.cloudinaryOpen}></img></div>;
      }
    }
    var profilecover = function(){
      if (user.profile_url){
        return <div className="profile-photo-container"><img src={user.profile_url} onClick={this.cloudinaryOpen}></img></div>;
      }
    }
    return(
      <div className="profile-container">
        <div className="profile-info">
          <div className="user-info">
            <h1 className="username">{user.username}</h1>
            <h2 className="song-count">Songs: {user.songs.length}</h2>
            <h2 className="playlist-count">Playlists: {user.playlists.length}</h2>
            <h2 className="like-count">Likes: {user.liked_songs.length}</h2>
          </div>
          {profileimage()}
          {profilecover()}
        </div>
        <Feed feed={user.feed}/>
      </div>
    );
  }
})

module.exports = Profile;
