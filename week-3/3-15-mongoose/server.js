'use strict'
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let mongoose = require('mongoose')
let Penguin = require('./models/penguin_model')

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser.json())

app.get('/penguins', (req, res) => {
  Penguin.find({}, (err, penguins) => {
    res.json({data: penguins})
  })
})

app.get('/penguins/:id', (req, res) => {
  Penguin.findById(req.params.id, (err, penguin) => {
    res.json(penguin);
  })
})

app.post('/penguins', (req, res) => {
  var newPenguin = new Penguin(req.body);
  newPenguin.save((err, penguin) => {
    res.json(penguin);
  })
})

app.put('/penguins/:id', (req, res) => {
  Penguin.findByIdAndUpdate(req.params.id, req.body, (err, penguin) => {
    if (err) return res.send(err);
    res.json(penguin);
    
  })
})

app.delete('/penguins/:id', (req, res) => {
  Penguin.findById(req.params.id, (err, penguin) => {
    penguin.remove((err, penguin) => {
      res.json({message: 'penguin removed'});
    })
  })
})

app.listen(3000, () => {
  console.log('server started')
})
