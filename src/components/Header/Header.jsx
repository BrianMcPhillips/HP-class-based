import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h3>Harry Potter</h3>
      </header>
    )
  }
}
