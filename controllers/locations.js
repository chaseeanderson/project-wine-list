const Location = require('../models/location');

module.exports = {
  index
}

function index (req, res) {
  Location.find({}, (err, locations) => res.render('locations', {title: 'REGIONS', locations}));
}