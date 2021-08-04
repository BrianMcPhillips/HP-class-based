import React, { Component } from 'react';

export default class CharacterItem extends Component {
  render() {
    const { 
      data: {
        image,
        name,
        house
      } 
    } = this.props;
    return (
      <div>
        <img src={image} alt={name} /> 
        <h3>{name}</h3>
        <h5>{house}</h5>
      </div>
    )
  }
}
