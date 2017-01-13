import React, { Component } from 'react';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/Octicons'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {createTodo}  from '../actions'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodoText: undefined,
      loading: false
    }
  }
  addNewTodo = () => {
    var {newTodoText} = this.state
    var {dispatch, navigator} = this.props
    if(newTodoText && newTodoText != ''){
      this.setState({
        loading: true
      })
      dispatch(createTodo(newTodoText)).then(() => {
        this.setState({
          loading: false
        })
        navigator.pop()
      })
    }
  }
  onBack = () => {
    this.props.navigator.pop()
  }

  renderScrollViewOrLoading = () => {
    if(this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Creating Todo...</Text>
        </View>
      )
    } else {
      return (
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.inputContainer}>
            <TextInput onChangeText={(newTodoText) => {
              this.setState({newTodoText})
            }}
            placeholder='New To-Do Text'
            style={styles.input}/>
          </View>
        </ScrollView>
      )
    }
  }
  render() {
    console.log(this.props.todos)
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.onBack}>
            <Icon name='chevron-left' size={20} color='white'/>
          </TouchableOpacity>
          <Text style={styles.title}>
            New To-Do
          </Text>
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name='check' size={20} color='white'/>
          </TouchableOpacity>
        </View>
        {this.renderScrollViewOrLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2ecc71'
  },
  input: {
    height: 26
  }
})

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(NewTodo)
