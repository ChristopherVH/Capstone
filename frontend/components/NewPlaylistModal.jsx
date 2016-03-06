var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var Modal = require('boron/FadeModal');
var PlaylistStore = require("../stores/PlaylistStore.js");
var PlaylistActions = require("../actions/PlaylistActions.js");
var NewPlaylistForm = require("./NewPlaylistForm.jsx");

var modalStyle = {
    width: '300px'
};
// backdropStyle={backdropStyle} contentStyle={contentStyle}
var NewPlaylistModal = React.createClass({
    getInitialState: function (){
      return({
        playlists: PlaylistStore.all()
      })
    },
    _onChange: function(){
      this.setState({
        playlists: PlaylistStore.all()
      })
    },
    componentDidMount: function(){
      this.playlistListener = PlaylistStore.addListener(this._onChange)
      PlaylistActions.fetchUserPlaylists(SingleUserStore.currentUser().id)
    },
    componentWillUnmount: function(){
      this.playlistListener.remove()
    },
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },
    render: function() {
      if (this.state.playlists === undefined){
        return <div></div>;
      }
        return (
            <div>
                <button onClick={this.showModal}>Create Playlist With Song</button>
                <Modal ref="modal" modalStyle={modalStyle}>
                  <NewPlaylistForm songId={this.props.songId}/>
                  <button onClick={this.hideModal}>Close</button>
                </Modal>
            </div>
        );
    }
});

module.exports = NewPlaylistModal;
