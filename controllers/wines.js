const Wine = require('../models/wine');

module.exports = {
  index,
  new: newWine,
  create
}


function index (req, res) {
  Wine.find({}, function(err, wines) {
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
    err ? res.render('wines/new') : res.redirect('wines/home');
  });

  // Wine.create(req.body, function(err, wine) {
    
  //   err ? res.render('wines/new') : res.redirect('wines/home');
  // });
}