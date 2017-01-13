import axios from 'axios'
import Keychain from 'react-native-keychain'

import {TODOS_URL, TODO_TRL} from '../api'
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

exports.getTodos = () => {
  return (dispatch) => {
    return Keychain.getGenericPassword().then((credentials) => {
      var {username, password} = credentials
      return axios.get(TODOS_URL(username), {
        headers: {authorization: password}
      }).then((response) => {
        dispatch(addTodo(response.data.todo))
      }).catch((error) => {
        dispatch(addAlert('Could not create todo.'))
      })
    })
  }
}

const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo
  }
}
