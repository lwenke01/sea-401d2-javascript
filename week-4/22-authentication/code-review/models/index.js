var mongoose = require('mongoose')
let fs = require('fs')

module.exports = () => {
  mongoose.connect(process.env.MONGO_URI)
}
