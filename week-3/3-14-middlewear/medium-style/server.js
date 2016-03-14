let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.json())

var penguinRouter = express.Router()

penguinRouter.get('/penguins', (req, res) => {
})
penguinRouter.get('/penguins/:id', (req, res) => {
})

app.use('/', penguinRouter)

let dateRouter = express.Router()
dateRouter.route('/dates')
  .get((req, res) => {

  })
  .post((req, res) => {

  })

dateRouter.route('/dates/:id')
  .all((req, res, next) => {
    req.penguin = db.penguins[req.params.id] 
  })
  .get((req, res) => {
    res.json(db.penguins)
  })
  .put((req, res) => {

  })

dateRouter.get('/dates/:id', (req, res) => {

})

app.use('/', dateRouter)
