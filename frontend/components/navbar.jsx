var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function(){
    return(
      <header>
        <nav>
          <a href="/session/new">Login</a>
          <Link to="/" >Logo, Greetings
          </Link>
        </nav>
      </header>
    )
  }
})

module.exports = Navbar;
