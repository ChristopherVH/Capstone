var React = require('react');

var SingleUserStore = require("../stores/SingleUserStore.js");
var Modal = require('boron/FadeModal');
var PlaylistStore = require("../stores/PlaylistStore.js");
var PlaylistActions = require("../actions/PlaylistActions.js");
var AddToPlaylistButton = require("./AddToPlaylistButton.jsx");

var modalStyle = {
    width: '300px'
};
// backdropStyle={backdropStyle} contentStyle={contentStyle}
var PlaylistModal = React.createClass({
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
    allPlaylists: function(){
      if (SingleUserStore.currentUser().username === undefined){
        return <div>You must be signed in to add songs to playlists</div>;
      }
      var songId = this.props.songId
      var playlistList = this.state.playlists.map(function (playlist, index) {
           return [<div>{playlist.title}</div>,<AddToPlaylistButton key={index} playlist={playlist} songId={songId}/>];
         });
      return playlistList;
    },
    render: function() {
      if (this.state.playlists === undefined){
        return <div></div>;
      }
        return (
            <div>
                <button onClick={this.showModal}>Add Or Remove From Playlist</button>
                <Modal ref="modal" modalStyle={modalStyle}>
                    {this.allPlaylists()}
                    <button onClick={this.hideModal}>Close</button>
                </Modal>
            </div>
        );
    }
});

module.exports = PlaylistModal;
