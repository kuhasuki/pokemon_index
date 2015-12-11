var PokemonStore = require('../stores/pokemon.js');
var PokemonIndexItem = require('./pokemonIndexItem.jsx');
var ApiUtil = require('../util/apiUtil.js');
var React = require('react');

var PokemansIndex = React.createClass({
  getInitialState: function() {
    return({pokemans: PokemonStore.all()});
  },
  _hasChanged: function(){
    this.setState({pokemans: PokemonStore.all()});
  },
  componentWillUnmount: function() {
    this.aToken.remove();
  },
  componentDidMount: function() {
    ApiUtil.fetchAllPokemans();
    this.aToken = PokemonStore.addListener(this._hasChanged);
  },
  render: function(){
    console.log(this.props);
    this.arrayPokemans = [];
    for (var key in this.state.pokemans) {
      if (this.state.pokemans.hasOwnProperty(key)) {
       var pokemon = this.state.pokemans[key];
       this.arrayPokemans.push(pokemon);
      }
    }
    return(
      <div>
        <ul>
        {
          this.arrayPokemans.map(function(pocketmonster, idx){
            return(<PokemonIndexItem history={this.props.history} key={idx} pokemon={pocketmonster} />);
          }.bind(this))
        }
        </ul>
      </div>
    );
  }

});

module.exports = PokemansIndex;
