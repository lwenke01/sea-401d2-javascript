let express = require('express')
let app = express()
let models = require('./models')
let router = express.Router()

require('./routes/penguin-routes')(router, models)
