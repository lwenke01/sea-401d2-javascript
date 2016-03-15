const mongoose = require('mongoose');

const penguinSchema = new mongoose.Schema({
  name: String,
  clothes: {type: String, default: 'tuxedo'}
});

module.exports = mongoose.model('Penguin', penguinSchema);