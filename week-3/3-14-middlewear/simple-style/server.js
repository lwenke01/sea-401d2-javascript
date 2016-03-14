'use strict'
let express = require('express')
let bodyParser = require('body-parser')
let app = express()

let db = {
  penguins: [ 
    {
      name: 'McPenguin'
    },
    {
      name: 'McPenguin Jr'
    }
  ]
}

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log('request logged')
  next()
})

app.get('/middlestuff', (req, res, next) => {
  req.myMessage = 'hello'
  console.log('hit /middlestuff 1')
  next()
}, (req, res, next) => {
  console.log(req.myMessage)
  console.log('hit /middlestuff 2')
  next()
})

app.get('/penguins', (req, res) => {
  res.json({
    status: true,
    data: db.penguins
  })
})

app.get('/penguins/:id', (req, res) => {
  /*
  let penguin = db.penguins[req.params.id]
  res.json({
    status: true 
    data: penguin
  })
  */
})

app.post('/penguins', (req, res) => {
  db.penguins.push(req.body)
  let penguin = req.body
  res.json({
    status: true,
    data: penguin
  })
})

app.put('/penguins/:id', (req, res) => {
  db.penguins[req.params.id] = req.body
  res.json({
    status: true,
    data: db.penguin[req.params.id]
  })
})

app.listen(3000, () => {
  console.log('server started')
})



