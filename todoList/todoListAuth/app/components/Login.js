import React, { Component } from 'react';
import { connect } from 'react-redux'
import {formValueSelector, Field, reduxForm} from 'redux-form'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {loginUser, signupUser, addAlert} from '../actions'

const TextInputField = (props) => {
  const { input, meta, placeholder } = props

  const renderError = (meta) => {
    if(meta.touched && meta.error) {
      return (
        <Text style={styles.formError}>
          {meta.error}
        </Text>
      )
    }
  }

  return (
    <View>
      <TextInput
        {...input}
        placeholder={placeholder}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.textInput}/>
      {renderError(meta)}
    </View>
  )
}

class Login extends Component {

  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  onSignIn = () => {
    var { dispatch } = this.props
    var { email, password } = this.props.fields

    this.setState({
      loading: true
    })
    dispatch(loginUser(email, password)).then(() => {
      this.setState({
        loading: false
      })
    })
  }

  onSignUp = () => {
    var { dispatch } = this.props
    var { email, password } = this.props.fields

    this.setState({
      loading: true
    })
    dispatch(signupUser(email, password)).then(() => {
      this.setState({
        loading: false
      })
    })
  }

  render() {
    var { email, password } = this.props.fields

    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              To-Do
            </Text>
            <View style={styles.field}>
              <Field
                name="email"
                component={TextInputField}
                props={{placeholder: 'Email'}} />
            </View>
            <View style={styles.field}>
              <Field
                name="password"
                component={TextInputField}
                placeholder='Passsword'
                props={{placeholder: 'Password'}} />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this.onSignIn}>
                <Text style={styles.button}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onSignUp}>
                <Text style={styles.button}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  }
}

const validate = (formProps) => {
  var errors = {}
  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }
  return errors
}

const selector = formValueSelector('login')

export default connect(state => ({
  fields: selector(state, 'email', 'password')
}))(reduxForm({
  form: 'login',
  validate
})(Login))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20
  },
  field: {
      borderRadius: 5,
      padding: 5,
      paddingLeft: 8,
      margin: 7,
      marginTop: 0,
      backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  },
  formError: {
    color: 'red'
  }
})
