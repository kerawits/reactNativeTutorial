import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// import {} from '..actions'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Boilerplate App
        </Text>
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
