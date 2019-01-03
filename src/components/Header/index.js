/**
 * Module dependencies
 */

import React, {Component} from 'react';
import styles from './styles';
import { 
  Appbar,
} from 'react-native-paper';

/**
 * Header Component
 */
export default class Header extends Component {
  render() {
    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="TO-DO" theme={{fonts:{regular: 'Roboto Bold'}}} />
      </Appbar.Header>
    );
  }
}
