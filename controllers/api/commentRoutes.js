const router = require('express').Router();
const  {User, Blog, Comment}  = require('../../models');

router.get('/:id', async(req, res)=> {
    try{
      const existingComment = await Comment.findAll({
        raw:true,
        nest: true,
        where: { blog_id: req.session.selection},
        include: [
            {
              model: Blog,
              include: [
        {
            
            model:User,
            attributes: {
              exclude: ['password']
            },
            
        }
        ]
    },]
      })

   console.log(existingComment);


         // res.render('home-page', {existingBlogs})
        
    
    }
    catch(err){
      console.log(err)
      res.status(500).json(err);
    }
    }
    );

module.exports = Comment;