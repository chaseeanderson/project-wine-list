const express = require('express');
const router = express.Router();
const passport = require('passport');
const isLoggedIn = require('../config/auth');
const wines = require('../controllers/wines');
const winesCtrl = require('../controllers/wines');

// GET view for adding a new wine
router.get('/new', isLoggedIn, winesCtrl.new);
// GET view for wine details
router.get('/:id', isLoggedIn, winesCtrl.show);
// POST create a new wine
router.post('/home', isLoggedIn, winesCtrl.create);


module.exports = router;
