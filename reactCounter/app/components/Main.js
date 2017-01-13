import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {incrementCounter, decrementCounter} from '../actions'

class Main extends Component {
  incrementCounter = () => {
    this.props.dispatch(incrementCounter)
  }

  decrementCounter = () => {
    this.props.dispatch(decrementCounter)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: 'center'}}>
          {this.props.count}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.incrementCounter}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.decrementCounter}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

var mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

module.exports = connect(mapStateToProps)(Main)
