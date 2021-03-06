const express = require('express')
const router = express.Router();
const isLoggedIn = require('../config/auth');
const locationsCtrl = require('../controllers/locations');

// GET index all the locations
router.get('/locations', isLoggedIn, locationsCtrl.index);
// GET form view for adding new location
router.get('/locations/new', isLoggedIn, locationsCtrl.new);
// GET view of location details
router.get('/locations/:id', isLoggedIn, locationsCtrl.show);
// GET view form to edit a location 
router.get('/locations/:id/edit', isLoggedIn, locationsCtrl.edit);
// POST create a new location
router.post('/locations', isLoggedIn, locationsCtrl.create);
// POST to add location to wine
router.post('/wines/:id/locations', isLoggedIn, locationsCtrl.addToWine);
// PUT to update a location
router.put('/locations/:id', isLoggedIn, locationsCtrl.update);
// DELETE to remove a location
router.delete('/locations/:id', isLoggedIn, locationsCtrl.delete);

module.exports = router; 