import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const {
      hanTerm,
      term
    } = this.props;
    return (
      <div>
        <input onChange={hanTerm} type='text'></input>
      </div>
    )
  }
}
