// Import Libraries and Components
import React, { Component } from 'react';
import request from 'superagent';
import CharacterList from './ChracterList/CharacterList';
import SearchBar from './ChracterList/SearchBar/SearchBar';
import options from '../../assets/data';

export default class SearchPage extends Component {
  state = {
    characterData: [],
    option: 'all',
    term: ''
    
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
  handleOption = (e) => {
    this.setState({ option: e.target.value })
  }
  render() {
    const { characterData, term, option } = this.state;
    const filteredChar = characterData.filter(character => 
      option === 'all' ? true : option !== 'all' && character[option].includes(term)
    );
    return (
      <div>
        <SearchBar 
          hanTerm={this.handleTerm}
          hanOption={this.handleOption}
          term={term}
          options={options}/>
        <CharacterList data={filteredChar}/>
      </div>
    )
  }
}
