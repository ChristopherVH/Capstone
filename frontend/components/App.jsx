var React = require('react'),
    Navbar = require("./Navbar.jsx"),
    Playbar = require("./Playbar.jsx"),
    Greeting = require("./Greeting.jsx");


var App = React.createClass({
  render: function(){
    return (
    <div>
      <Navbar/>
      {this.props.children}
      <Playbar/>
    </div>
  );
  }
})
module.exports = App;
