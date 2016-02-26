var React = require('react');
var SongStore = require("../stores/SongStore.js");
var ApiUtil = require("../util/apiUtil.js");
var Collection = require("./Collection.jsx");

var Greeting = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <img src="https://images.unsplash.com/17/unsplash_5252bb51404f8_1.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=3b4259f5b981c95dd562825566d530a8"></img>
          <Collection/>
        </ul>
      </div>
    )
  }
})

module.exports = Greeting;
