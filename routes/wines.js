const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');
const winesCtrl = require('../controllers/wines');

// GET view for adding a new wine
router.get('/new', isLoggedIn, winesCtrl.new);
// GET view for wine details
router.get('/:id', isLoggedIn, winesCtrl.show);
// GET view for editing wine details
router.get('/:id/edit', isLoggedIn, winesCtrl.edit);
// POST create a new wine
router.post('/home', isLoggedIn, winesCtrl.create);
// DELETE delete a wine from user's list
router.delete('/:id', isLoggedIn, winesCtrl.delete);
// PUT update a wine's details
router.put('/:id', isLoggedIn, winesCtrl.update);

module.exports = router;
