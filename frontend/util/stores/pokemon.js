var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');

var PokemonStore = new Store(Dispatcher);

var _pokemans = {};

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "POKEMANS_ACQUIRED":
      PokemonStore.resetPokemons(payload.pokemans);
      break;
    case "POKEMON_ACQUIRED":
      // console.log(payload.pokemon);
      PokemonStore.resetPokemon(payload.pokemon);
      break;
  }
};

PokemonStore.all = function(){
  return _pokemans;
};

PokemonStore.find = function(iDizzle){
  // console.log(_pokemans[iDizzle]);
  // for (var key in _pokemans) {
  //   if (_pokemans.hasOwnProperty(key)) {
  //    if( _pokemans[iDizzle] === _pokemans[key]){
  //      console.log("match found!");
  //      return _pokemans[key];
  //    }
  //   }
  //   return {};
  // }
  return _pokemans[iDizzle];
};

PokemonStore.resetPokemons = function(pokemans){
  _pokemans = {};
  pokemans.forEach(function(pokemon){
    _pokemans[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.resetPokemon = function(pocketMonster){
  // console.log(_pokemans);
  // console.log(pocketMonster);
  _pokemans[pocketMonster.id] = pocketMonster;
  // for (var key in _pokemans) {
  //   if (_pokemans.hasOwnProperty(key)) {
  //     console.log(key);
  //    if( parseInt(key) === pocketMonster.id){
  //      console.log("match found!");
  //      return key;
  //    }
  //   }
  //   return {};
  // }
  PokemonStore.__emitChange();
  // console.log(PokemonStore.all());
};
module.exports = PokemonStore;
