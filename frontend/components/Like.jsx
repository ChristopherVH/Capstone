var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");

var Like = React.createClass({
  getInitialState: function(){
    return({
      liked: undefined
    })
  },
  componentDidMount: function(){
    liked = SingleUserStore.currentUser().liked_songs
    if (liked[this.props.songId]){
      this.setState({liked: true})
    }else{
      this.setState({liked: false})
    }
  },
  toggleLike: function(){
    this.setState({liked: !(this.state.liked)})
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
