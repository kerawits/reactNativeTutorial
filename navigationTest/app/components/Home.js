import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import About from './About'

export default class Home extends Component {
  navigateToAbout = () => {
    this.props.navigator.push({
      component: About,
      title: 'About',
      navigationBarHidden: true
    })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'red'}}>
        <Text>
          Welcome from Home!
        </Text>
        <TouchableOpacity onPress={this.navigateToAbout}>
          <Text>
            About
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
