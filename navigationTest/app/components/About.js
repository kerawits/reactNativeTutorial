import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Contact from './Contact'

export default class About extends Component {
  navigateToHome = () => {
    this.props.navigator.pop()
  }

  navigateToContact = () => {
    this.props.navigator.push({
      component: Contact,
      title: 'Contact',
      navigationBarHidden: true
    })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'blue'}}>
        <Text>
          About!
        </Text>
        <TouchableOpacity onPress={this.navigateToHome}>
          <Text>
            Back to Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigateToContact}>
          <Text>
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
