const Wine = require('../models/wine');

module.exports = {
  create
}

function create (req, res) {
  Wine.findById(req.params.id, function(err, wine) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    wine.tastingNotes.push(req.body);
    wine.save(err => res.redirect(`/wines/${wine._id}`));
  });
}