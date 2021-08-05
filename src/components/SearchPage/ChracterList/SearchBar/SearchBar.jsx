import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const {
      hanTerm,
      hanOption,
      options
    } = this.props;
    return (
      <div>
        <select onChange={hanOption}>
          {
            options.map(word => <option key={word} value={word}>{word}</option>)
          }
        </select>
        <input onChange={hanTerm} type='text'></input>
      </div>
    )
  }
}
