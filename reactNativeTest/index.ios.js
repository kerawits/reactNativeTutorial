/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './app/components/Main'

import Home from './Home'

export default class reactNativeTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
