const passport = require('passport')
const ExtractJwt = require('passport-jwt').ExtractJwt
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local')

const User = require('../models/user')
const config = require('../config')

var localOptions = {
  usernameField: 'email'
}

var localStrategy = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({email: email.toLowerCase()}).then(user => {
    if(!user) { return done(null, false) }

    user.comparePassword(password).then(isMatch => {
      if(!isMatch) { return done(null, false)  }
      else { return done(null, user)}
    }).catch((error) => {
      return done(error, false)
    })
  }).catch((error) => {
    return done(error, false)
  })
})

var jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
}

var jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub).then(user => {
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  }).catch((error) => {
    return done(error, false)
  })
})

passport.use(jwtStrategy)
passport.use(localStrategy)
