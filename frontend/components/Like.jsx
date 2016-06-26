var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var LikeActions = require("../actions/LikeActions.js");
var UserActions = require("../actions/UserActions.js");
var Modal = require('react-modal');

var modalStyle = {
    width: '300px'
};

var appElement = document.getElementById('root');

const customStyles = {
  overlay : {
    position          : 'absolute',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    height            : "100%",
    width             : "100%",
    backgroundColor   : 'rgba(0, 0, 0, 0.7)',
    zIndex            : 10
  },
  content : {
    position              : 'relative',
    top                   : '50%',
    left                  : 0,
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 0,
    background            : "rgba(50,41,41,0.8)",
    transform             : 'translate(-50%, -50%)',
    padding               : 0,
    border                : 0,
    zIndex               : 11
  }
};

var Like = React.createClass({
  //TODO maybe get it so likes is a number that goes up/down one based on song's likes
  getInitialState: function(){
    return({
      liked: undefined,
      modalIsOpen: false
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
    if (SingleUserStore.currentUser().liked_songs === undefined){
      this.setState({liked: false})
    }else if (SingleUserStore.currentUser().liked_songs[newProps.songId]){
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
      if (this.props.userId === undefined || this.props.userId === SingleUserStore.currentUser().id){
        UserActions.fetchCurrentUser();
        UserActions.fetchUserInfo(this.props.userId);
      }else{
        UserActions.fetchUserInfo(this.props.userId);
      }
    }else{
      LikeActions.deleteLike(SingleUserStore.currentUser().id, this.props.songId)
      this.setState({liked: false})
      if (this.props.userId === undefined || this.props.userId === SingleUserStore.currentUser().id){
        UserActions.fetchCurrentUser();
        UserActions.fetchUserInfo(this.props.userId);
      }else{
        UserActions.fetchUserInfo(this.props.userId);
      }
    }
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  display: function(){
    if (SingleUserStore.currentUser().username === undefined){
      return [<button className="not-like-button" key={1} onClick={this.openModal}></button>,
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal__Bootstrap modal-dialog"
          style={customStyles}>

          <div className="modal-content">
            <div className="modal-body">
              You must be signed in to like songs.
            </div>
            <button type="button" className="btn btn-default button error-modal-button" onClick={this.closeModal}>Close</button>
          </div>
        </Modal>];
    }
    else if (this.state.liked){
      return  <input className="like-button" type="button" onClick={this.toggleLike}/>;
      //this.props.numbLikes + 1
    }else {
      return  <input className="not-like-button" type="button" onClick={this.toggleLike}/>;
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
