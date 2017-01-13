import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {addTodo, deleteTodo} from '../actions'

class TodoItem extends Component {
  deleteSelf = () => {
    this.props.dispatch(deleteTodo(this.props.id))
  }
  render() {
    return (
      <TouchableOpacity onPress={this.deleteSelf}>
        <View style={styles.todoContainer}>
          <Text style={styles.todoText}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

TodoItem = connect()(TodoItem)

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodoText: ''
    }
  }

  addNewTodo = () => {
    var {newTodoText} = this.state
    if(newTodoText && newTodoText !== '') {
      this.setState({
        newTodoText: ''
      })
      this.props.dispatch(addTodo(newTodoText))
    }
  }

  renderTodos = () => {
    return this.props.todos.map((todo) => {
      return (
        <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.topBar}>
            <Text style={styles.title}>
              To-Do List
            </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChange={(event) => {
                this.setState({newTodoText: event.nativeEvent.text})
              }
            }
            value={this.state.newTodoText}
            returnKeyType='done'
            placeholder='New To-Do'
            onSubmitEditing={this.addNewTodo}
            style={styles.input} />
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}>
          {this.renderTodos()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {

  }
})

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(Main)
