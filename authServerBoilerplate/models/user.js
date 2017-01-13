const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema
mongoose.Promise = global.Promise

var validateEmail = (email) => {
  return (/\S+@\S+\.\S+/).test(email)
  // return true
}

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    require: 'Email address is required',
    validate: [validateEmail, 'Please enter a valid email']
  },
  password: {
    type: String
  }
})

userSchema.methods.comparePassword = function(candidatePassword) {
  var user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if(err) { reject(err) }
      else { resolve(isMatch)}
    })
  })
}

userSchema.pre('save', function(next) {
  var user = this
  if(user.isNew || user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) { return next(err) }
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) { return next(err) }
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})

module.exports = mongoose.model('user', userSchema)
