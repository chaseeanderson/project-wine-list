const Location = require('../models/location');
const Wine = require('../models/wine');

module.exports = {
  index,
  new: newLocation,
  create,
  show,
  addToWine,
  edit,
  update,
  delete: deleteLocation
}

function index (req, res) {
  Location.find({}).sort({country: 'asc'}).exec((err, locations) => res.render('locations', {title: 'REGIONS', locations}));
}

function newLocation (req, res) {
  res.render('locations/new', {title: 'BUILD A PLACE'});
}

function create (req, res) {
  const location = new Location(req.body);
  location.user = req.user._id;
  location.save(err => {
    err ? res.render('locations/new') : res.redirect('locations');
  });
}

function show (req, res) {
  Location.findById(req.params.id, (err, location) =>
    res.render('locations/show', {title: `${location.country}`, location}));
}

function addToWine (req, res) {
  Wine.findById(req.params.id, (err, wine) => {
    wine.location = req.body.locationId;
    console.log('submission: ', req.body)
    wine.save(err => res.redirect(`/wines/${wine._id}`));
  });  
}

function edit (req, res) {
  Location.findOne({_id: req.params.id}, (err, location) => {
    if (err || !location) res.redirect('locations');
    if (!location.user.equals(req.user._id)) res.redirect('/wines/home');
    res.render('locations/edit', {title: 'EDIT ME', location});
  });
}

function update (req, res) {
  Location.findOneAndUpdate({_id: req.params.id, user: req.user._id},
    req.body,
    {new: true},
    (err, location) => {
      if (!location.user.equals(req.user._id)) res.redirect('/wines/home');
      (err || !location) ? res.redirect('locations') : res.redirect(`${req.params.id}`)
    }
  );
}

function deleteLocation (req, res) {
  Location.findOneAndDelete({_id: req.params.id, user: req.user._id},
    (err, location) => {
      (!location.user.equals(req.user._id)) ? res.redirect('/wines/home') : res.redirect('/locations');
    });
}