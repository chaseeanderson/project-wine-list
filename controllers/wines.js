const Wine = require('../models/wine');

module.exports = {
  index,
  new: newWine,
  create,
  show
}


function index (req, res) {
  Wine.find({usersListing: req.user._id}, function(err, wines) {
    res.render('wines/home', { title: 'Home', wines });
  });
}

function newWine (req, res) {
  res.render('wines/new', { title: 'Add Wine' });
}

function create (req, res) {
  const wine = new Wine(req.body);
  wine.usersListing.push(req.user._id);
  wine.save(err => {
    err ? res.render('wines/new') : res.redirect('home');
  });
}

function show (req, res) {
  Wine.findById(req.params.id, function(err, wine) {
    res.render('wines/show', {title: 'Wine Details', wine});
  });
}