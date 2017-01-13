import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Contact extends Component {
  navigateToAbout = () => {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'green'}}>
        <Text>
          Contact!
        </Text>
        <TouchableOpacity onPress={this.navigateToAbout}>
          <Text>
            Back to About
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
