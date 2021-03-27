const express = require('express');
const router = express.Router();
const passport = require('passport');
const isLoggedIn = require('../config/auth');
const winesCtrl = require('../controllers/wines');

// GET view for adding a new wine
router.get('/new', isLoggedIn, winesCtrl.new);

module.exports = router;
