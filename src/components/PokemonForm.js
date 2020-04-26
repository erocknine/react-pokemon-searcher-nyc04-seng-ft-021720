import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
    state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }

  handleSubmit = (event) => {
    event.preventDefault()
    const {name, hp, frontUrl, backUrl} = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(response => response.json())
      .then(pokemon => {
        this.props.updatePokedex(pokemon)
        this.setState(initialState)
      })
  }

  handleInput = (event) => {
    const inputName = event.target.name
    this.setState({ 
      [inputName]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleInput} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInput} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleInput} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleInput} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png

export default PokemonForm