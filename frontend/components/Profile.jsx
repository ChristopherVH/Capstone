var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var Feed = require("./Feed.jsx");
var UserActions = require("../actions/UserActions.js");

var Profile = React.createClass({
  getInitialState: function(){
    return({
      user: undefined
    });
  },
  _onChange: function(){
    this.setState({user: SingleUserStore.access()});
  },
  componentWillReceiveProps: function(newProps){
    UserActions.fetchUserInfo(newProps.params.user_id);
  },
  componentDidMount: function(){
    this.userListener = SingleUserStore.addListener(this._onChange);
    UserActions.fetchUserInfo(this.props.params.user_id);
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
        <img src={this.state.user.profile_url} onClick={this.cloudinaryOpen}></img>
        <div className= 'upload-profile'></div>
      </div>;
    }else {
      return <div className="profile-photo-container">
        <img src={this.state.user.profile_url} onClick={this.cloudinaryOpen}></img>
      </div>;
    }
  },
  profileCover: function(){
    if (this.state.user.cover_url){
      return <div className="cover-photo-container"><img src={this.state.user.cover_url} onClick={this.cloudinaryOpen}></img></div>;
    }
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  render: function(){
    if (this.state.user === undefined || this.state.user.id === undefined){
      return <div></div>;
    }
    return(
      <div className="profile-container">
        <div className="profile-info">
          <div className="user-info">
            <h1 className="username">{this.state.user.username}</h1>
            <h2 className="song-count">Songs: {this.state.user.songs.length}</h2>
            <h2 className="playlist-count">Playlists: {this.state.user.playlists.length}</h2>
            <h2 className="like-count">Likes: {this.state.user.liked_songs.length}</h2>
          </div>
          {this.profileImage()}
          {this.profileCover()}
        </div>
        <Feed feed={this.state.user.feed} username={this.state.user.username} allSongs={this.state.user.allsongs} userId={this.state.user.id}/>
      </div>
    );
  }
});

module.exports = Profile;
