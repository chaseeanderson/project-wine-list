const Location = require('../models/location');

module.exports = {
  index,
  new: newLocation,
}

function index (req, res) {
  Location.find({}, (err, locations) => res.render('locations', {title: 'REGIONS', locations}));
}

function newLocation (req, res) {
  res.render('locations/new', {title: 'BUILD A PLACE'});
}