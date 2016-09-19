
module.exports = {
  fetchUserPlaylists: function(user_id, callback){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id + "/playlists",
      success:function (playlists){
        callback(playlists);
      }
    });
  },
  fetchUserInfo: function(user_id, callback){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id,
      success:function (userinfo){
        callback(userinfo);
      }
    });
  },
  fetchCurrentUser: function(callback){
    $.ajax({
      type:"GET",
      url:"api/sessions",
      error: function(){
        callback();
      },
      success:function (currentUser){
        callback(currentUser);
      }
    });
  },
  signOut: function(callback){
    $.ajax({
      type:"DELETE",
      url:"session",
      success: function(){
        window.location.href = ('/#/');
        callback();
      }
    })
  },
  updateProfileImage: function(url, user_id, callback){
    $.ajax({
      type:"PATCH",
      url:"api/users/" + user_id,
      data: {profile_url: url},
      success: function(user){
        callback(user);
      }
    })
  }
}
