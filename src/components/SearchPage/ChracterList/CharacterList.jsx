import React, { Component } from 'react';
import CharacterItem from './CharacterItem/CharacterItem';

export default class CharacterList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map(character => <CharacterItem key={character.name} data={character} />)
        }
      </div>
    )
  }
}
