const Wine = require('../models/wine');

module.exports = {
  index,
  new: newWine
}


function index (req, res) {
  Wine.find({}, function(err, wines) {
    res.render('wines/home', { title: 'Home', wines });
  });
}

function newWine (req, res) {
  res.render('wines/new', { title: 'Add Wine' });
}