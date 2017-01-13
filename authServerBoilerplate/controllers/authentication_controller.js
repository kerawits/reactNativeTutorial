const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

const tokenForUser = (user) => {
  var timestamp = new Date().getTime()
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret)
}

exports.signin = (req, res, next) => {
  var {user} = req
  return res.status(200).json({token: tokenForUser(user), user_id: user._id})
}

exports.signup = (req, res, next) => {
  var email = req.body.email.trim()
  var password = req.body.password.trim()

  console.log(req.body)

  if(!email || !password) {
    return res.status(422).json({error: 'You must provide an email and password'})
  }

  User.findOne({email: email}).then((existingUser) => {
    if(existingUser) { return res.status(422).json({error: 'Email taken'}) }

    var user = new User({
      email: email,
      password: password
    })

    user.save().then((user) => {
      return res.status(200).json({
        user_id: user._id,
        token: tokenForUser(user)
      })
    }).catch((error) => {
      console.log("eror:", error)
      if(error) { return next(error) }
    })
  })
}
