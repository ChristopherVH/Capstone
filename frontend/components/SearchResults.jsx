var React = require('react');
var PropTypes = React.PropTypes;
var SearchStore = require('../stores/SearchStore.js');
var Router = require('react-router');

var SearchResults = React.createClass({
  getInitialState: function() {
    return( {searchResults: SearchStore.all()});
  },
  componentDidMount: function() {
    this.searchResultsToken = SearchStore.addListener(this.newSearchResults);
  },
  componentWillUnmount: function() {
    this.searchResultsToken.remove();
  },
  newSearchResults: function() {
    this.setState({searchResults: SearchStore.all()});
  },
  userDirect: function(id){
    window.location.href = ('/#/user/' + id)
    // window.location.reload()
    this.props.callback()
  },
  songDirect: function(id){
    window.location.href = ('/#/songs/' + id)
    // window.location.reload()
    this.props.callback()
  },
  playlistDirect: function(id){
    window.location.href = ('/#/playlists/' + id)
    // window.location.reload()
    this.props.callback()
  },
  createSearchResults: function() {
    return this.state.searchResults.map(function(result, idx){
      if (result.username !== undefined){
        return <li key={idx} className="search-result" onClick={this.userDirect.bind(null, result.id)}>{result.username}</li>;
      }else if (result.genre !== undefined){
        return <li key={idx} className="search-result" onClick={this.songDirect.bind(null, result.id)} >{result.title}</li>;
      }else{
        return <li key={idx} className="search-result" onClick={this.playlistDirect.bind(null, result.id)} >{result.title}</li>;
      }
    }.bind(this));
  },
  render: function() {
    return (
      <ul id='search-results'>
        {this.createSearchResults()}
      </ul>
    );
  }

});

module.exports = SearchResults;
