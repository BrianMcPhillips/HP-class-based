import React, { Component } from 'react';
import request from 'superagent';

export default class SearchPage extends Component {
  state = {
    characterData: []
  }
  componentDidMount = async() => {
    const data = await request.get('http://hp-api.herokuapp.com/api/characters');
    console.log(data.body);
    this.setState({
      characterData: data.body
    })
  }
  render() {
    return (
      <div>
        Hello World 
      </div>
    )
  }
}
