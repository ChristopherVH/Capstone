var UserActions = require('../actions/UserActions.js');
module.exports = {
  fetchUserSongs: function(user_id){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id + "/songs",
      success:function (songs){
        ApiAction.recieveUserSongs(songs) //TODO implement this when its actually useful
      }
    })
  },
  fetchUserPlaylists: function(user_id){
    $.ajax({
      type:"GET",
      url:"api/users/" + user_id + "/playlists",
      success:function (playlists){
        ApiAction.recieveUserPlaylists(playlists) //TODO implement this when its actually useful
      }
    })
  }
}
