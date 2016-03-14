'use strict'
let express = require('express')
let app = express()
let config = require('./config/env')
console.log(config)

let apiRouter = express.Router()
require('./routes/penguin-routes')(apiRouter)

app.use('/api', apiRouter)
app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`)
})
