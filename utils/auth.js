const withAuth = (req, res, next) => {
  
    if (!req.session.loggedIn) {
      res.redirect('/login');//if session expired redirect user to login 
    } else {
      //if user logged continue with execution of controller
      next();
    }
  };
  
  module.exports = withAuth;