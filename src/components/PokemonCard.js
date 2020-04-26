import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    front: true
  }

  imageToggle = () => {
    this.setState({ front: !this.state.front })
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    let front = sprites.front
    let back = sprites.back

    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.front ? front:back} alt={name} onClick={() => this.imageToggle()} />
          </div>
          <div className="content">
          <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
