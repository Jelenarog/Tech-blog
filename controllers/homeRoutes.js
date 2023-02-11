const router = require('express').Router();
//import models

//Dashboard Route
router.get('/dashboard',  (req, res) => {
  res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
});

// Homepage Route
router.get('/', (req, res) => {
  res.render('home-page', {loggedIn: req.session.loggedIn});
  });

  // Registration Route
router.get('/register',  (req, res) => {
  res.render('register-page'); 
});

// Login route
router.get('/login',  (req, res) => {
    res.render('login-page'); 
  });

module.exports = router;