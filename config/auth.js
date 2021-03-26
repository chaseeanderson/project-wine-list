module.exports = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  // send to login page if user is not logged in
  res.redirect('/auth/google');
};