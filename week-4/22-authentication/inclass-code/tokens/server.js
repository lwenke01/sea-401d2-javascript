var express = require('express')
var bodyParser = require('body-parser').json()
var app = express()

var User = require('./models/user')
var auth = require('./lib/authenticate')

app.post('/login', (req, res) => {
    var authorizationArray = req.headers.authorization.split(' ')
    var method = authorizationArray[0]
    var base64ed = authorizationArray[1]
    var authArray = new Buffer(base64ed, 'base64').toString().split(':')
    var name = authArray[0]
    var password = authArray[1]
    User.findOne({name: name})
    .then(user => {
      return res.json({token: user.generateToken()})
    }) 
    .catch(e => {
      res.json(e)
    })
    
}) 

app.get('/user', auth, (req, res) => {
  User.findOne({_id: req.decoded._id})
  .then(user => {
    res.json(user)
  })
  .catch(err => {
    res.status(400).json(err)
  })
})

app.post('/users', bodyParser, (req, res) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(e => res.json(e))
})

app.listen(3000)
