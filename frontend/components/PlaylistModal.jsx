var React = require('react');

var SingleUserStore = require("../stores/SingleUserStore.js");
// var Modal = require('boron/FadeModal');
var Modal = require('react-modal');
var PlaylistStore = require("../stores/PlaylistStore.js");
var PlaylistActions = require("../actions/PlaylistActions.js");
var AddToPlaylistButton = require("./AddToPlaylistButton.jsx");



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

// var modalStyle = {
//     width: '300px'
// };

// var contentStyle = {
//     backgroundColor: 'grey',
//     height: '100%'
// };
// backdropStyle={backdropStyle} contentStyle={contentStyle}
var PlaylistModal = React.createClass({
    getInitialState: function (){
      return({
        playlists: PlaylistStore.all(),
        modalIsOpen: false
      })
    },
    _onChange: function(){
      this.setState({
        playlists: PlaylistStore.all()
      })
    },
    componentDidMount: function(){
      this.playlistListener = PlaylistStore.addListener(this._onChange)
    },
    componentWillUnmount: function(){
      this.playlistListener.remove()
    },
    openModal: function() {
      this.setState({modalIsOpen: true});
    },
    closeModal: function() {
      this.setState({modalIsOpen: false});
    },
    allPlaylists: function(){
      if (SingleUserStore.currentUser().username === undefined){
        return <div>You must be signed in to add songs to playlists</div>;
      }
      var songId = this.props.songId
      var playlistList = this.state.playlists.map(function (playlist, index) {
           return [<div className="modal-playlist-title">{playlist.title}</div>,<AddToPlaylistButton className="modal-playlist-button" key={index} playlist={playlist} songId={songId}/>];
         });
      return playlistList;
    },
    render: function() {
      if (this.state.playlists === undefined){
        return <div></div>;
      }
        return (
            <div>
                <button onClick={this.openModal}>Add Or Remove From Playlist</button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  className="Modal__Bootstrap modal-dialog"
                  style={customStyles}>

                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Playlists</h4>
                    </div>
                    <div className="modal-body">
                      {this.allPlaylists()}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default button" onClick={this.closeModal}>Close</button>
                    </div>
                  </div>

                </Modal>
            </div>
        );
    }
});

module.exports = PlaylistModal;
