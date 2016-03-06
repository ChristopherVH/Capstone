var Dispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/SearchConstants.js');
var ApiUtil = require('../util/apiUtil.js');


var SearchActions = {
  retrieveSearch: function(searchTerms) {
    ApiUtil.searchDatabase(searchTerms, this.recieveSearch);
  },
  recieveSearch: function(searchResults) {
    Dispatcher.dispatch({
      actionType : SearchConstants.SEARCH_RESULTS,
      searchResults : searchResults
    });
  },
  clearSearch: function() {
    Dispatcher.dispatch({
      actionType : SearchConstants.SEARCH_RESULTS,
      searchResults: []
    });
  },
};

module.exports = SearchActions;
