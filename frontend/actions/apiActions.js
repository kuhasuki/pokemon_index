var Dispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/pokemonConstants.js');

var ApiActions = {
  acquirePokemans: function(pokemans){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMANS_ACQUIRED,
      pokemans: pokemans
    });
  },
  acquirePokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_ACQUIRED,
      pokemon: pokemon
    });
  }
};

module.exports = ApiActions;
