import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// import {} from '..actions'

import Login from './Login'
import Main from './Main'
import AlertContainer from './alerts/AlertContainer'

class App extends Component {
  renderMainView = () => {
    if(this.props.user_id) {
      return (
        <Main />
      )
    } else {
      return (
        <Login />
      )
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle={'light-content'} />
        {this.renderMainView()}
        <AlertContainer />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id
  }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
