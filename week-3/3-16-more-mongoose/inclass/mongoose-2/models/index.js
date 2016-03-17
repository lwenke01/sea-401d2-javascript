let mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
let models = {}

require('./Penguin')(mongoose, models)
require('./Tie')(mongoose, models)

module.exports = models
