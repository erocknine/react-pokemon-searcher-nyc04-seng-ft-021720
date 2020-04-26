import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import PokemonCard from './PokemonCard'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokedex: [],
    search: '',
    filter: 'Name'
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokedex: pokemon }))
  }

  renderCards(pokemon) {
    return pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  }

  onChange = (event) => {
    this.setState({ 
      search: event.target.value
    })
  }

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  updatePokedex = (pokemon) => {
    this.setState({
      pokedex: [...this.state.pokedex, pokemon]
    })
  }

  render() {
    let pokemon;
    if(this.state.filter === 'Name') {
      pokemon = this.state.pokedex.filter(pokemon => pokemon.name.includes(this.state.search))
    } else if(this.state.filter === 'Type') {
      pokemon = this.state.pokedex.filter(pokemon => (pokemon.types.join( )).includes(this.state.search))
    }

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm updatePokedex={this.updatePokedex}/>
        <br />
        <Search onChange={this.onChange} filter={this.state.filter} changeFilter={this.changeFilter}/>
        <br />
        <PokemonCollection renderCards={this.renderCards} pokemon={pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
