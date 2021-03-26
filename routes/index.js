const express = require('express');
const router = express.Router();
const passport = require('passport');


// GET Welcome Page
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

// GET Home (Wines) Page
router.get('/wines', function(req, res, next) {
  res.render('wines', { title: 'Wines' });
});

router.get('/auth/google', passport.authenticate(
  'google', 
  {scope: ['profile', 'email']}
));

// Google OAuth login route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/wines',
    failureRedirect : '/'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
