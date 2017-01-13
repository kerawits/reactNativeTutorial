import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import {removeAlert} from '../../actions'

class Alert extends Component {
  onRemoveAlert = () => {
    var {dispatch, alert} = this.props
    dispatch(removeAlert(alert.id))
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRemoveAlert}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.alert.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect()(Alert)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f3dede',
    borderColor: '#ebccd1',
    borderWidth: 2
  },
  text: {
    color: '#a94442'
  }
})