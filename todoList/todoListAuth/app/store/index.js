import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {AsyncStorage} from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from '../reducer'

var defaultState = {}

exports.configureStore = (initialState=defaultState) => {
  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  ))
  persistStore(store, {storage: AsyncStorage})

  if(module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store
}
