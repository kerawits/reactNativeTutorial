var mongoose = require('mongoose')
var uuid = require('uuid')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:testMongo/testMongo')

var userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {type: String},
  todos: [
    {
      text: {type:String}
    }
  ]
})

userSchema.pre('save', function(next) {
  console.log('About to save!')
  var user = this
  user.password = uuid.v4()
  next()
})

var User = mongoose.model('user', userSchema)

var email = 'test@test.com'

// var user = new User({
//   email: email
// })
//
// user.save((err) => {
//   if(err) {
//     return console.log(err)
//   } else {
//     return console.log('User was saved')
//   }
// })
//
// console.log('Outside of callback')

// var text = "This is a todo"
//
// User.findOne({email: email}, (err, user) => {
//   if (err) {
//     return console.log(err)
//   }
//
//   if (!user) {
//     return console.log('Cound not find user')
//   }
//
//   var count = user.todos.push({
//     text: text
//   })
//   console.log(count)
//
//   user.save((err) => {
//     if(err) {
//       return console.log(err)
//     } else {
//       return console.log('User was saved')
//     }
//   })
// })

var id = '583fe166aa6e6045d3627f51'

User.update({email: email}, {$pull: {todos: {_id: id}}}, (err) => {
  if(err) {
    console.log(err)
  } else {
    return console.log('Reoved that todo')
  }
})
