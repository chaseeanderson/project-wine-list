const Wine = require('../models/wine');
const Location = require('../models/location');


module.exports = {
  index,
  new: newWine,
  create,
  show,
  delete: deleteWine,
  edit,
  update
}


function index (req, res) {
  Wine.find({usersListing: req.user._id}).populate('location').exec((err, wines) => {
    res.render('wines/home', {title: 'THE JUICE', wines});
  });
}

function newWine (req, res) {
  res.render('wines/new', {title: 'BUILD A WINE'});
}

function create (req, res) {
  const wine = new Wine(req.body);
  wine.usersListing.push(req.user._id);
  wine.user = req.user._id;
  wine.save(err => {
    err ? res.redirect('/wines/new') : res.redirect('home');
  });
}

function show (req, res) {
  Wine.findById(req.params.id).populate('location').exec((err, wine) => {
    Location.find({}).sort({country: 'asc'}).exec((err, locations) => {
      res.render('wines/show', {title: 'WHAT ARE WE DRINKING?', wine, locations});
    });
  });
}

function deleteWine (req, res) {
  Wine.findOneAndDelete({_id: req.params.id, usersListing: req.user._id}, 
    (err, wine) => {
      (!wine.user.equals(req.user._id)) ? res.redirect('home') : res.redirect('home');
    }
  );
}

function edit (req, res) {
  Wine.findOne({_id: req.params.id, usersListing: req.user._id}, (err, wine) => {
    Location.find({}).sort({country: 'asc'}).exec((err, locations) => {
      if (!wine.user.equals(req.user._id)) res.redirect('home');
      (err || !wine) ? res.redirect('home') : res.render('wines/edit', {title: 'EDIT ME', wine, locations});
    });
  });
}

function update (req, res) {
  Wine.findOneAndUpdate({_id: req.params.id, usersListing: req.user._id},
    req.body,
    {new: true},
    (err, wine) => {
      if (!wine.user.equals(req.user._id)) res.redirect('home');
      (err || !wine) ? res.redirect('home') : res.redirect(`${req.params.id}`);
    }
  );
}