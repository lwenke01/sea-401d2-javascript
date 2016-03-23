var jwt = require('jsonwebtoken')

var mongoose = require('mongoose')
var userSchema = mongoose.Schema({
  name: String,
  group: String,
  password: String
})

userSchema.methods.generateToken = function() {
  return jwt.sign({_id: this._id}, process.env.SECRET || 'change me')
}

var User = mongoose.model('User', userSchema)
module.exports = User
