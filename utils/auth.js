const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/logIn');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  