import React, { Component } from 'react';
import request from 'superagent';
import CharacterList from './ChracterList/CharacterList';
import SearchBar from './ChracterList/SearchBar/SearchBar';

export default class SearchPage extends Component {
  state = {
    characterData: [],
    term: 'All'
  }
  componentDidMount = async() => {
    const data = await request.get('http://hp-api.herokuapp.com/api/characters');
    console.log(data.body);
    this.setState({
      characterData: data.body
    })
  }
  handleTerm = (e) => {
    this.setState({ term: e.target.value })
  }
  render() {
    const { characterData, term } = this.state;
    const filteredChar = characterData.filter(character => 
      character.name === 'All' ? true : character.name === term
    );
    return (
      <div>
        <SearchBar 
          hanTerm={this.handleTerm}/>
        <CharacterList data={filteredChar}/>
      </div>
    )
  }
}
