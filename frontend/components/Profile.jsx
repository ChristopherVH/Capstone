var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var Feed = require("./Feed.jsx");
var UserActions = require("../actions/UserActions.js");

var Profile = React.createClass({
  getInitialState: function(){
    return({
      user: undefined,
      changingUser: false
    });
  },
  _onChange: function(){
    this.setState({user: SingleUserStore.access(), changingUser: false});
  },
  componentWillReceiveProps: function(newProps){
    this.setState({changingUser: true});
    UserActions.fetchUserInfo(newProps.params.user_id);
  },
  componentDidMount: function(){
    this.userListener = SingleUserStore.addListener(this._onChange);
    UserActions.fetchUserInfo(this.props.params.user_id);
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  updateProfileImage: function(url){
    UserActions.updateProfileImage(url, this.state.user.id);
  },
  cloudinaryOpen: function(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null){
          this.updateProfileImage(images[0].url);
        }
    }.bind(this));
  },
  profileImage: function(){
    if (this.state.user.profile_url && SingleUserStore.currentUser().id === this.state.user.id){
      return <div className="profile-photo-container">
        <img src={this.state.user.profile_url}></img>
        <div onClick={this.cloudinaryOpen} className= 'upload-profile'></div>
      </div>;
    }else {
      return <div className="profile-photo-container">
        <img src={this.state.user.profile_url} onClick={this.cloudinaryOpen}></img>
      </div>;
    }
  },
  profileCover: function(){
    if (SingleUserStore.currentUser().id === this.state.user.id){
      var likes = Object.keys(SingleUserStore.currentUser().liked_songs_hash).length;
    }else{
      var likes = Object.keys(SingleUserStore.access().liked_songs_hash).length;
    }
    if (this.state.user.cover_url){
      return (
      <div className="cover-photo-container">
        <img src={this.state.user.cover_url} onClick={this.cloudinaryOpen}></img>
          <div className="user-info">
            <h1 className="username">{this.state.user.username}</h1>
            <h2 className="song-count">Songs: {this.state.user.songs.length}</h2>
            <h2 className="playlist-count">Playlists: {this.state.user.playlists.length}</h2>
            <h2 className="like-count">Likes: {likes}</h2>
          </div>
        </div>
        );
    }
  },
  render: function(){
    if (this.state.user === undefined || this.state.user.id === undefined || this.state.changingUser === true){
      return <div></div>;
    }
    return(
      <div className="profile-container">
        <div className="profile-info">
          {this.profileImage()}
          {this.profileCover()}
        </div>
        <Feed feed={this.state.user.feed} username={this.state.user.username} allSongs={this.state.user.allsongs} userId={this.state.user.id}/>
      </div>
    );
  }
});

module.exports = Profile;
