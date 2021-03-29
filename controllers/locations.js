const Location = require('../models/location');
const Wine = require('../models/wine');

module.exports = {
  index,
  new: newLocation,
  create,
  show,
  addToWine
}

function index (req, res) {
  Location.find({}).sort({country: 'asc'}).exec((err, locations) => res.render('locations', {title: 'REGIONS', locations}));
}

function newLocation (req, res) {
  res.render('locations/new', {title: 'BUILD A PLACE'});
}

function create (req, res) {
    Location.create(req.body, function (err, location) {
      Location.user = req.user._id;
      err ? res.render('locations/new') : res.redirect('locations');
    });
}

function show (req, res) {
  Location.findById(req.params.id, (err, location) =>
    res.render('locations/show', {title: `${location.country}`, location}));
}

function addToWine (req, res) {
  Wine.findById(req.params.id, function (err, wine) {
    wine.location = req.body.locationId;
    wine.save(err => res.redirect(`/wines/${wine._id}`));
  });  
}