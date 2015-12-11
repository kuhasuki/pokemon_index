var React = require('react');
var PokemonStore = require('../stores/pokemon.js');
var ApiUtil = require('../util/apiUtil.js');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return({pokemon: {}});
  },
  getStateFromStore: function(){
    return PokemonStore.find(this.props.params.pokemonId);
  },
  _hasChanged: function(){
    this.setState({pokemon: this.getStateFromStore()});
  },
  componentWillUnmount: function() {
    this.aToken.remove();
  },
  componentDidMount: function() {
    ApiUtil.fetchOnePokemon(this.props.params.pokemonId);
    this.aToken = PokemonStore.addListener(this._hasChanged);
  },
  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchOnePokemon(newProps.params.pokemonId);
    this.setState({pokemon: this.getStateFromStore()});
  },
  render: function(){
    console.log(this.state.pokemon);
    if(typeof this.state.pokemon.id !== "undefined"){
    return(
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url} />
            <span>Attack: {this.state.pokemon.attack}</span><br></br>
            <span>Defense: {this.state.pokemon.defense}</span><br></br>
            <ul>Moves:
              {
                this.state.pokemon.moves.map(function(move){
                  return(<li key={move}>&nbsp;{move}</li>);
                })
              }
            </ul>
            <ul>Toys:
              {
                this.state.pokemon.toys.map(function(toy, idx){
                  return(<li key={idx}>&nbsp;{toy.name}</li>);
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
    }
  }

});

module.exports = PokemonDetail;
