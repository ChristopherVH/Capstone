var React = require('react');
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
    height            : "100%",
    width             : "100%",
    backgroundColor   : 'rgba(0, 0, 0, 0.7)',
    zIndex            : 10
  },
  content : {
    position              : 'fixed',
    top                   : '50%',
    left                  : '50%',
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

var NewPlaylistModal = React.createClass({
    getInitialState: function (){
      return({
        modalIsOpen: false
      })
    },
    openModal: function() {
      this.setState({modalIsOpen: true});
    },
    closeModal: function() {
      this.setState({modalIsOpen: false});
    },
    display: function(){
      if (SingleUserStore.currentUser().username !== undefined)
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
                  <NewPlaylistForm song={this.props.song} songId={this.props.songId} userId={this.props.userId}/>
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
                  You must be signed in to create new playlist with a song.
                </div>
                <button type="button" className="btn btn-default button error-modal-button" onClick={this.closeModal}>Close</button>
              </div>
            </Modal>;
        }
    },
    render: function() {
        return (
            <div>
                <button className="add-to-new-playlist-button" onClick={this.openModal}>Create New Playlist</button>
                {this.display()}
            </div>
        );
    }
});

module.exports = NewPlaylistModal;
