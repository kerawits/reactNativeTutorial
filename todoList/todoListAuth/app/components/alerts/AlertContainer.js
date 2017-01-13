import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Alert from './Alert'

class AlertContainer extends Component {
  renderAlerts = () => {
    return this.props.alerts.map((alert) => {
      return (
        <Alert alert={alert} key={alert.id}/>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderAlerts()}
      </View>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    alerts: state.alerts
  }
}

export default connect(mapStateToProps)(AlertContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
})
