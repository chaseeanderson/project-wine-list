const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');
const usersCtrl = require('../controllers/users');

// GET view form to see all users
router.get('/users', isLoggedIn, usersCtrl.index);
// GET view user profile
router.get('/users/:id', isLoggedIn, usersCtrl.show)

module.exports = router;