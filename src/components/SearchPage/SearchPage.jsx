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
      term === 'All' ? true : character.name.includes(term)
    );
    return (
      <div>
        <SearchBar 
          hanTerm={this.handleTerm}
          term={term}/>
        <CharacterList data={filteredChar}/>
      </div>
    )
  }
}
