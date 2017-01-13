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
  User.findOne({email: email}).then(user => {
    if(!user) { return done(null, false) }

    user.comparePassword(password).then(isMatch => {
      if(!isMatch) { return done(null, false)  }
      else { return done(null, user)}
    }).catch(err => {
      return done(err)
    })
  }).catch(err => {
    return done(err)
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
  }).catch(err => {
    return done(eror, false)
  })
})

passport.use(jwtStrategy)
passport.use(localStrategy)
