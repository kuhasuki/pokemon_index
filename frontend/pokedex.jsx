var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var PokemonStore = require('./stores/pokemon.js');

var PokemansIndex = require('./components/pokemansIndex.jsx');
var PokemonDetail = require('./components/pokemonDetail.jsx');

var App = React.createClass({
  render: function(){
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemansIndex history={this.props.history} />
        </div>
        {this.props.children}
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail} />
    </Route>
  </Router>, root);
});
