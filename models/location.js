const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  country: {type: String, required: true, unique: true},
  region: {type: String, unique: true},
  subRegion: {type: String, unique: true},
  locationDetails: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Location', locationSchema);