import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableFeedback,
} from 'react-native';

import TextComponent from './TextComponent'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      text: "Hello from State!"
    }
  }

  changeMessage = () => {
    this.setState({
      text: "Hello from updated state"
    })
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeMessage}>
          <TextComponent text={this.state.text}/>
        </TouchableOpacity>
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
