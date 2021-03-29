const Location = require('../models/location');

module.exports = {
  index,
  new: newLocation,
  create,
}

function index (req, res) {
  Location.find({}, (err, locations) => res.render('locations', {title: 'REGIONS', locations}));
}

function newLocation (req, res) {
  res.render('locations/new', {title: 'BUILD A PLACE'});
}

function create (req, res) {
    Location.create(req.body, (err, flight) => 
    err ? console.log(err) : res.redirect('locations'));
  }

  // function create (req, res) {
  //   const location = new Location(req.body);
  //   location.save(err => {
  //     err ? res.render('locations/new') : res.redirect('locations');
  //   });
  // }