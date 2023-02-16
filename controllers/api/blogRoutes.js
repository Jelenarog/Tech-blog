const router = require('express').Router();
const  {User, Blog, Comment}  = require('../../models');


//Find all posts

//Home page Route
router.get('/:id', async(req, res)=> {
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
      console.log(req.params.id);
      const blogComments = await Comment.findAll({
        raw:true,
        nest: true,
        where: { 
          blog_id : req.params.id,
         },
        // include: [
        // {
        //     model:User,
        //     attributes: {
        //       exclude: ['password']
        //     },
        // }
        // ]
      })
      console.log(blogComments);
   //console.log(existingCards);

//res.status(200);
        res.render('blog', {existingCards, blogComments, loggedIn : req.session.loggedIn})
        
    
    }
    catch(err){
      console.log(err)
      res.status(500).json(err);
    }
    }
    );

    module.exports = router;