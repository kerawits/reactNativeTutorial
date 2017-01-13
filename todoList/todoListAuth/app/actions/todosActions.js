import axios from 'axios'
import Keychain from 'react-native-keychain'

import {TODOS_URL, TODO_URL} from '../api'
import {addAlert} from './alertsActions'


exports.createTodo = (text) => {
  return (dispatch) => {
    return Keychain.getGenericPassword().then((credentials) => {
      var {username, password} = credentials
      return axios.post(TODOS_URL(username), {text}, {
        headers: {authorization: password}
      }).then((response) => {
        dispatch(addTodo(response.data.todo))
      }).catch((error) => {
        dispatch(addAlert('Could not create todo.'))
      })
    })
  }
}

exports.deleteTodo = (todo_id) => {
  return (dispatch) => {
    return Keychain.getGenericPassword().then((credentials) => {
      var {username, password} = credentials
      return axios.delete(TODO_URL(username, todo_id), {
        headers: {authorization: password}
      }).then((response) => {
        dispatch(removeTodo(todo_id))
      }).catch((error) => {
        dispatch(addAlert('Could not delete todo.'))
      })
    })
  }
}

exports.getTodos = (dispatch) => {
  return Keychain.getGenericPassword().then((credentials) => {
    var {username, password} = credentials
    return axios.get(TODOS_URL(username), {
      headers: {authorization: password}
    }).then((response) => {
      dispatch(setTodos(response.data.todos))
    }).catch((error) => {
      dispatch(addAlert('Could not get todos.'))
    })
  })
}

const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo
  }
}

const removeTodo = (todo_id) => {
  return {
    type: 'REMOVE_TODO',
    todo_id
  }
}

const setTodos = (todos) => {
  return {
    type: 'SET_TODO',
    todos
  }
}
