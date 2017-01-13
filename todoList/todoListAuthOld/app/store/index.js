import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {AsyncStorage} from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from '../reducer'

var defaultState = {}

exports.configureStore = (initialState=defaultState) => {
  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
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
