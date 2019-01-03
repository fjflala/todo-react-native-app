/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  FAB,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import Router from './src/router';
import Header from './src/components/Header';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f1c40f',
  },
  fonts: {
    regular: 'Roboto',
    medium: 'Roboto Medium',
    light: 'Roboto Light',
    thin: 'Roboto Thin',
  },
};

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Header />
          <Router />
          <FAB
            style={styles.fab}
            large
            icon="add"
            onPress={() => console.log('Pressed')}
          />
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,                            
  },
  container: {
    flex: 1,
  },
});
