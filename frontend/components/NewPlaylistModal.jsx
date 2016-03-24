var React = require('react');
// var Modal = require('boron/FadeModal');
var Modal = require('react-modal');
var PlaylistStore = require("../stores/PlaylistStore.js");
var PlaylistActions = require("../actions/PlaylistActions.js");
var NewPlaylistForm = require("./NewPlaylistForm.jsx");
var SingleUserStore = require("../stores/SingleUserStore.js");

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.7)',
    zIndex            : 10
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    background            : "rgba(50,41,41,0.8)",
    transform             : 'translate(-50%, -50%)',
    padding               : 0,
    border                : 0
  }
};
// backdropStyle={backdropStyle} contentStyle={contentStyle}
var NewPlaylistModal = React.createClass({
    getInitialState: function (){
      return({
        modalIsOpen: false
      })
    },
    // _onChange: function(){
    //   this.setState({
    //     playlists: PlaylistStore.all()
    //   })
    // },
    // componentDidMount: function(){
    //   this.playlistListener = PlaylistStore.addListener(this._onChange)
    //   // PlaylistActions.fetchUserPlaylists(SingleUserStore.currentUser().id)
    // },
    // componentWillUnmount: function(){
    //   this.playlistListener.remove()
    // },
    openModal: function() {
      this.setState({modalIsOpen: true});
    },
    closeModal: function() {
      this.setState({modalIsOpen: false});
    },
    display: function(){
      if (SingleUserStore.currentUser() === undefined)
      {
      return <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="Modal__Bootstrap modal-dialog"
              style={customStyles}>

              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Please specify the name and description</h4>
                </div>
                <div className="modal-body">
                  <NewPlaylistForm songId={this.props.songId} userId={this.props.userId}/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default button" onClick={this.closeModal}>Close</button>
                </div>
              </div>
            </Modal>;
        }
        else {
          return   <Modal
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
            </Modal>;
        }
    },
    render: function() {
      // if (this.state.playlists === undefined){
      //   return <div></div>;
      // }
        return (
            <div>
                <button onClick={this.openModal}>Add To New Playlist</button>
                {this.display()}
            </div>
        );
    }
});

module.exports = NewPlaylistModal;
