var React = require('react'),
    Navbar = require("./Navbar.jsx"),
    Playbar = require("./Playbar.jsx"),
    Greeting = require("./Greeting.jsx");

// var React = require('react');
// var PokemonForm = require('./pokemons/form');
// var PokemonIndex = require('./pokemons/index');
//
// module.exports = React.createClass({
//
//   render: function () {
//     return(
//       <div id="pokedex">
//         <div className="pokemon-index-pane">
//           <PokemonForm />
//           <PokemonIndex />
//         </div>
//
//         {this.props.children}
//       </div>
//     );
//   }
// });

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
