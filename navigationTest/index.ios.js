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
  View,
  NavigatorIOS
} from 'react-native';

import Home from './app/components/Home'

export default class navigationTest extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'Home',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('navigationTest', () => navigationTest);
