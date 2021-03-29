const express = require('express')
const router = express.Router();
const isLoggedIn = require('../config/auth');
const locationsCtrl = require('../controllers/locations');

// GET index all the locations
router.get('/', isLoggedIn, locationsCtrl.index);
// GET form view for adding new location
router.get('/new', isLoggedIn, locationsCtrl.new);

module.exports = router; 