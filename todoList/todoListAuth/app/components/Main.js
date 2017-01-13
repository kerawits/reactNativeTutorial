import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

// import {unauthUser} from '../actions'

import TodoList from './TodoList'

class Main extends Component {
  // onLogout = () => {
  //   this.props.dispatch(unauthUser)
  // }

  /* <TouchableOpacity onPress={this.onLogout}>
    <Text>
      Logout
    </Text>
  </TouchableOpacity> */

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: TodoList,
          title: 'Todo List',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    )
  }
}

export default Main
