const router = require('express').Router();
const  {User}  = require('../../models');
//const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in


// Login
router.post('/login', async (req, res) => {
    try {
        
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username. Please try again!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password. Please try again!' });
        return;
      }
  
      const {password, ...userData} = dbUserData; 
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user= userData;
        console.log('Save session user and loggedIN',req.session.cookie);
  


        res
        .status(200);
        // .json({ user: userData.username, message: 'You are now logged in!'});
        // res.response(200).render('homepage');
      });
      // res.render('homepage', {loggedIn: req.session.loggedIn});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //Logout
  router.post('/logout', (req, res) => {
    // console.log(req.session);
    if (req.session.loggedIn) {
      req.session.destroy((err) => {
        if(err) {
          console.log(err)
        } else {
          res.status(204).end();
        }
      })
    } else {
      res.status(404).end();
    }
  });
  module.exports = router;