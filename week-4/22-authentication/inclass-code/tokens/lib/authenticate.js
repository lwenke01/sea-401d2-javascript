var jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  var decoded;
  try {
    // header from Authorization: token myToken
    var token = req.headers.authorization.split(' ')[1]
    decoded = jwt.verify(token, process.env.SECRET || 'change me')
    req.decodedToken = decoded
    next()
  }
  catch (e) {
    return res.status(418).json({msg: 'authentication error'}) // I am a teapot
  }
  /*
  var User = require('../models/user')
  User.findOne({_id: decoded._id })
  .then(user => {
    req.user = user
    next()
  })
  .catch(err => {
    console.log(err)
    res.status(418).json({msg: err})
  })
  */
}
