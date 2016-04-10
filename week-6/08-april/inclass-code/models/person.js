const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    default: 21
  }
});

module.exports = mongoose.model('Person', personSchema);
