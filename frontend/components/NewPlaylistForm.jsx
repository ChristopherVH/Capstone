var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PlaylistActions = require('../actions/PlaylistActions.js');
var PlaylistStore = require("../stores/PlaylistStore.js");
var UserActions = require("../actions/UserActions.js");

var PlaylistForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {songId: this.props.songId, title: '', description: ''};
  },
  createPlaylist: function (event) {
    event.preventDefault();
    PlaylistActions.createPlaylist(this.state.title, this.state.description, this.props.song);
    this.setState({title: ''});
    this.setState({description: ''});
  },
  render: function() {
    return (
      <div className="commentformwrapper">

        <form className='newPlaylistForm' onSubmit={this.createPlaylist}>
          <div className="playlistArea">
            <input
              type='text'
              id='playlist-form-title'
              valueLink={this.linkState("title")}
              placeholder="New Playlist Name"
            />
          <textarea
              rows="3"
              id='playlist-form-description'
              valueLink={this.linkState("description")}
              placeholder="New Playlist Description"
            />
          <input className='playlist-form-submit' type="submit" value="Submit" ></input>
        </div>
      </form>
    </div>
    );
  }

});

module.exports = PlaylistForm;
