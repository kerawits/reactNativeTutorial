import axios from 'axios'
import Keychain from 'react-native-keychain'

import {SIGNIN_URL, SIGNUP_URL} from '../api'
import {addAlert} from './alertsActions'

exports.loginUser = (email, password) => {
  return (dispatch) => {
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data
      Keychain.setGenericPassword(user_id, token)
        .then(() => {
          // dispatch(addAlert(token))
          dispatch(authUser(user_id))
        }).catch((error) => {
          dispatch(addAlert("Could not log in."))
        })
    }).catch((error) => {
      dispatch(addAlert("Could not log in."))
    })
  }
}

exports.signupUser = (email, password) => {
  return (dispatch) => {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data
      Keychain.setGenericPassword(user_id, token)
        .then(() => {
          // dispatch(addAlert(token))
          dispatch(authUser(user_id))
        }).catch((error) => {
          dispatch(addAlert("Could not sign up."))
        })
    }).catch((error) => {
      dispatch(addAlert("Could not sign up."))
    })
  }
}

const authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}
