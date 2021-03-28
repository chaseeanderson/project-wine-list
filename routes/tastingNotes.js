const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');
const tastingNotesCtrl = require('../controllers/tastingNotes');

// POST create a tasting note
router.post('/wines/:id/tasting-notes', isLoggedIn, tastingNotesCtrl.create);

module.exports = router;