var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var LikeActions = require("../actions/LikeActions.js");

var Like = React.createClass({
  getInitialState: function(){
    return({
      liked: undefined
    })
  },
  componentDidMount: function(){
    if (SingleUserStore.currentUser().liked_songs[this.props.songId]){
      this.setState({liked: true})
    }else{
      this.setState({liked: false})
    }
  },
  toggleLike: function(){
    if (!(this.state.liked)){
      LikeActions.createLike(SingleUserStore.currentUser().id, this.props.songId)
      this.setState({liked: true})
    }else{
      LikeActions.deleteLike(SingleUserStore.currentUser().id, this.props.songId)
      this.setState({liked: false})
    }
  },
  display: function(){
    if (this.state.liked){
      return  <input type="button" onClick={this.toggleLike} value="Liked"/>;
    }else {
      return  <input type="button" onClick={this.toggleLike} value="Unliked"/>;
    }
  },
  render: function(){
    return (
      <div>{this.display()}</div>
    )
  }
})

module.exports = Like;
