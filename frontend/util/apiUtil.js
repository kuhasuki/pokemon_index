var ApiActions = require("../actions/apiActions.js");

var ApiUtil = {
  fetchAllPokemans: function(){
    $.get('/api/pokemon', {}, function(pokemans){
      ApiActions.acquirePokemans(pokemans);
    });
  },
  fetchOnePokemon: function(id){
    var url = '/api/pokemon/' + id;
    $.get(url, {}, function(pokemon){
      ApiActions.acquirePokemon(pokemon);
    });
  }
};

module.exports = ApiUtil;
