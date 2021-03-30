const Wine = require('../models/wine');

module.exports = {
  create,
  delete: deleteNote,
  edit,
  update
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

function deleteNote (req, res) {
  Wine.findOne({'tastingNotes._id': req.params.id})
  .then(function(wine) {
    // returns string of doc's id
    const note = wine.tastingNotes.id(req.params.id)
    if (!note.user.equals(req.user._id)) res.redirect('/wines/home');
    note.remove();
    wine.save()
    .then( () => res.redirect(`/wines/${wine._id}`))
    .catch( err => next(err));
  })
}

function edit (req, res) {
  Wine.findOne({'tastingNotes._id': req.params.id}, 
  function (err, wine) {
    const note = wine.tastingNotes.id(req.params.id);
    if (!note.user.equals(req.user._id)) res.redirect('/wines/home');
    if (err || !wine) res.redirect(`/wines/${wine._id}`);
    res.render(`tasting-notes/edit`, {title: 'EDIT NOTE', note});
  });
}

function update (req, res) {
  Wine.findOne({'tastingNotes._id': req.params.id},
  function (err, wine) {
    const note = wine.tastingNotes.id(req.params.id);
    if (!note.user.equals(req.user._id)) res.redirect('/wines/home');
    note.content = req.body.content;
    wine.save(err => res.redirect(`/wines/${wine._id}`));
  });
}