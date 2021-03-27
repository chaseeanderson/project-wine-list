const express = require('express');
const router = express.Router();
const passport = require('passport');
const winesCtrl = require('../controllers/wines');
const isLoggedIn = require('../config/auth');

// GET Welcome Page
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

// GET Home (Wines) Page
router.get('/wines/home', isLoggedIn, winesCtrl.index);

// OAuth routers
router.get('/auth/google', passport.authenticate(
  'google', 
  {scope: ['profile', 'email']}
));

// Google OAuth login route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/wines/home',
    failureRedirect : '/'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
