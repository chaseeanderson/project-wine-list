const Wine = require('../models/wine');

module.exports = {
  index,
  new: newWine,
  create,
  show,
  delete: deleteWine,
  edit
}


function index (req, res) {
  Wine.find({usersListing: req.user._id}, function(err, wines) {
    res.render('wines/home', { title: 'THE JUICE', wines });
  });
}

function newWine (req, res) {
  res.render('wines/new', { title: 'BUILD A WINE' });
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
    res.render('wines/show', {title: 'WHAT ARE WE DRINKING?', wine});
  });
}

function deleteWine (req, res) {
  Wine.findOneAndDelete({_id: req.params.id, usersListing: req.user._id}, function (err) {
    res.redirect('home');
  });
}

function edit (req, res) {
  Wine.findOne({_id: req.params.id, usersListing: req.user._id}, function (err, wine) {
    if (err || !wine) res.redirect('/home');
    res.render(`wines/edit`, { title: 'EDIT ME', wine });
  });
}