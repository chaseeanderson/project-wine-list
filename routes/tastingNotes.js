const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');
const tastingNotesCtrl = require('../controllers/tastingNotes');

// GET view form to edit a tasting note
router.get('/tasting-notes/:id/edit', isLoggedIn, tastingNotesCtrl.edit);
// POST create a tasting note
router.post('/wines/:id/tasting-notes', isLoggedIn, tastingNotesCtrl.create);
// DELETE delete a tasting note
router.delete('/tasting-notes/:id', isLoggedIn, tastingNotesCtrl.delete);

module.exports = router;