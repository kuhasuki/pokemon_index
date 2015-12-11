var React = require('react');

var PokemonIndexItem = React.createClass({
  showDetail: function(){
    this.url = '/pokemon/' + this.props.pokemon.id;
    this.props.history.push(this.url);
  },
  render: function(){
    return(
        <li className="poke-list-item" onClick={this.showDetail}>
          {this.props.pokemon.name}
          <br></br>
          {this.props.pokemon.poke_type}</li>
    );
  }

});

module.exports = PokemonIndexItem;
