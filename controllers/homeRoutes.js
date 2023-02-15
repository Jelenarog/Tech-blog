const router = require('express').Router();
//import models
const  {User, Blog}  = require('../models');

//Dashboard Route
router.get('/dashboard',  (req, res) => {
  res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
});

//Home page Route
  router.get('/', async(req, res)=> {
    try{
      const existingBlogs = await Blog.findAll({
        raw:true,
        nest: true,
        include: [
        {
            model:User,
            attributes: {
              exclude: ['password']
            }
        }
        ]

      })

   console.log(existingBlogs);


          res.render('home-page', {existingBlogs})
        
    
    }
    catch(err){
      console.log(err)
      res.status(500).json(err);
    }
    }
    );


// // Homepage Route
// router.get('/', (req, res) => {
//   res.render('home-page', {loggedIn: req.session.loggedIn});
//   });

  // Registration Route
router.get('/register',  (req, res) => {
  res.render('register-page'); 
});

// Login route
router.get('/login',  (req, res) => {
    res.render('login-page'); 
  });

module.exports = router;