const Location = require('../models/location');

module.exports = {
  index,
  new: newLocation,
  create,
  show
}

function index (req, res) {
  Location.find({}).sort({country: 'asc'}).exec((err, locations) => res.render('locations', {title: 'REGIONS', locations}));
}

function newLocation (req, res) {
  res.render('locations/new', {title: 'BUILD A PLACE'});
}

function create (req, res) {
    Location.create(req.body, (err, location) => 
    err ? res.render('locations/new') : res.redirect('locations'));
}

function show (req, res) {
  Location.findById(req.params.id, (err, location) =>
    res.render('locations/show', {title: `${location.country}`, location}));
}
