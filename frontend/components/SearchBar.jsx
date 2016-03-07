var React = require('react');
var SearchActions = require('../actions/SearchActions.js');
var SearchResults = require('./SearchResults.jsx');

var SearchBar = React.createClass({
  getInitialState: function() {
    return({
      searchPartial: ''
    });
  },
  _searchChanged: function(e) {
    this.setState({searchPartial:e.currentTarget.value});
    if (e.currentTarget.value) {
      SearchActions.retrieveSearch(e.currentTarget.value);
    } else {
      SearchActions.clearSearch();
    }
  },
  renderSearchResults:function() {
    if (this.state.searchPartial) {
      return <SearchResults callback={this.closeSearch}/>;
    } else {
      return null;
    }
  },
  closeSearch: function() {
    this.setState({searchPartial: ''});
  },
  render: function() {
    return (
      <div id="header-seach-div" >
        <input type='text'
          id='header-search-input'
          placeholder='Search...'
          value={this.state.searchPartial}
          onChange={this._searchChanged} >
        </input>
        {this.renderSearchResults()}
      </div>
    );
  }

});

module.exports = SearchBar;
