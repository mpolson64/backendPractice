const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partySchema = new Schema({
  name: {type: String, unique: true, required: true},
  queue: [{
    name: String,
    createdAt: Date
  }],
  pool: [{
    name: String,
    createdAt: Date
  }]
});

const Party = mongoose.model('Party', partySchema);

module.exports = Party;
