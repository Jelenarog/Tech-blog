const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Finding one blog and all comments that belong to that blog
router.get("/:id", withAuth, async (req, res) => {
  try {
    const selectedBlog = await Blog.findAll({
      raw: true,
      nest: true,
      where: {
        blog_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });

    const blogComments = await Comment.findAll({
      raw: true,
      nest: true,
      where: {
        blog_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });

    res.render("home-page", {
      selectedBlog,
      blogComments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





//Create new blog
router.post("/save", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.blogTitle,
      text: req.body.blogText,
      user_id: req.session.user.dataValues.user_id,
    });
    res.json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Find selected blog 






module.exports = router;
