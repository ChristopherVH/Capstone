var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var LikeActions = require("../actions/LikeActions.js");
var Modal = require('boron/FadeModal');

var modalStyle = {
    width: '300px'
};

var Like = React.createClass({
  //TODO maybe get it so likes is a number that goes up/down one based on song's likes
  getInitialState: function(){
    return({
      liked: undefined
    })
  },
  componentDidMount: function(){
    if (SingleUserStore.currentUser().liked_songs === undefined){
      this.setState({liked: false})
    }
    else if (SingleUserStore.currentUser().liked_songs[this.props.songId]){
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
  showModal: function(){
      this.refs.modal.show();
  },
  hideModal: function(){
      this.refs.modal.hide();
  },
  display: function(){
    if (SingleUserStore.currentUser().username === undefined){
      return [<button onClick={this.showModal}>Like</button>,
      <Modal ref="modal" modalStyle={modalStyle} >
          <div>You must be signed in to like songs</div>
          <button onClick={this.hideModal}>Close</button>
      </Modal>];
    }
    else if (this.state.liked){
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
