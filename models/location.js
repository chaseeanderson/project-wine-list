const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  country: {type: String, required: true},
  region: {type: String},
  subRegion: {type: String},
  locationDetails: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Location', locationSchema);