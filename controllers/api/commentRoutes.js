const router = require('express').Router();
const  {User, Blog, Comment}  = require('../../models');


//Find all comments for blog selected by user
router.get('/:id', async(req, res)=> {
  console.log(req.session);
    try{
      const existingCards = await Blog.findAll({
       raw:true,
        nest: true,
        where: { 
          blog_id : req.params.id,
         },
        include: [
        {
            model:User,
            attributes: {
              exclude: ['password']
            },
        }
        ]
      })
      const blogComments = await Comment.findAll({
        raw:true,
        nest: true,
        where: { 
          blog_id : req.params.id,
         },
        include: [
        {
            model:User,
            attributes: {
              exclude: ['password']
            },
        }
        ]
      })

      
 //Grab user info excluding password
 const userData =  await User.findAll({
  raw:true,

  where: { user_id: req.session.user.dataValues.user_id },
  attributes: {
    exclude: ['password']
  }
});
const currentUser = userData[0];
console.log(userData);

      res.render('home-page', {existingCards, currentUser, blogComments,loggedIn : req.session.loggedIn})
    }
    catch(err){
      console.log(err)
      res.status(500).json(err);
    }
    }
    );


//     // // Comment Route
// router.get('/', (req, res) => {
//  // res.render('comment-page', {loggedIn: req.session.loggedIn});
//   });


// Post comments 
    router.post('/save', async(req, res)=> {
      try{
        const newComment = await Comment.create({
          blog_id : req.body.blog_id,
          text: req.body.userComment,
          user_id: req.session.user.dataValues.user_id,

        })
       res.json(newComment);

      }
      catch(err){
        console.log(err)
        res.status(500).json(err);
      }
      });
  


    module.exports = router;