
module.exports = {
  fetchUserSongs: function(user_id){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id + "/songs",
      success:function (songs){
        UserActions.receiveUserSongs(songs) //TODO implement this when its actually useful
      }
    })
  },
  fetchUserPlaylists: function(user_id){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id + "/playlists",
      success:function (playlists){
        UserActions.receiveUserPlaylists(playlists) //TODO implement this when its actually useful
      }
    })
  },
  fetchUserInfo: function(user_id, callback){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id,
      success:function (userinfo){
        callback(userinfo);
      }
    })
  },
  fetchCurrentUser: function(callback){
    $.ajax({
      type:"GET",
      url:"api/sessions",
      success:function (currentUser){
        callback(currentUser) //TODO implement this when its actually useful
      }
    })
  }
}