const User = require('../models/user');
const Wine = require('../models/wine');

module.exports = {
  index,
  show
}

function index (req, res) {
  User.find({}, (err, users) => res.render('users', {title: 'BILLY JUICE', users}));
} 

function show (req, res) {
  User.findById(req.params.id, (err, user) => {
    Wine.find({usersListing: req.params.id}, (err, wines) => {
      (err) ? res.redirect('wines/home') : res.render('users/show', {title: `${user.name}`, user, wines});
    });  
  });
}