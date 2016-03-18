var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var LikeActions = require("../actions/LikeActions.js");
var UserActions = require("../actions/UserActions.js");
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
  componentWillReceiveProps: function(newProps){
    if (SingleUserStore.currentUser().liked_songs[newProps.songId]){
      this.setState({liked: true})
    }else{
      this.setState({liked: false})
    }
  },
  toggleLike: function(event){
    event.preventDefault();
    if (!(this.state.liked)){
      LikeActions.createLike(SingleUserStore.currentUser().id, this.props.songId)
      this.setState({liked: true})
      if (this.props.userId === undefined){
        UserActions.fetchCurrentUser();
      }else{
        UserActions.fetchUserInfo(this.props.userId);
      }
    }else{
      LikeActions.deleteLike(SingleUserStore.currentUser().id, this.props.songId)
      this.setState({liked: false})
      if (this.props.userId === undefined){
        UserActions.fetchCurrentUser();
      }else{
        UserActions.fetchUserInfo(this.props.userId);
      }
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
      return [<button key={1} onClick={this.showModal}>Like</button>,
      <Modal key={2} ref="modal" modalStyle={modalStyle} >
          <div>You must be signed in to like songs</div>
          <button onClick={this.hideModal}>Close</button>
      </Modal>];
    }
    else if (this.state.liked){
      return  <input type="button" onClick={this.toggleLike} value={"Liked"}/>;
      //this.props.numbLikes + 1
    }else {
      return  <input type="button" onClick={this.toggleLike} value="Unliked"/>;
      //this.props.numbLikes
    }
  },
  render: function(){
    return (
      <div>{this.display()}</div>
    )
  }
})

module.exports = Like;
