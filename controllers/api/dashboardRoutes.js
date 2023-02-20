const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Home page Route
router.get("/", withAuth, async (req, res) => {
  console.log(req.session.user.dataValues.user_id);
  try {
    const userBlogs = await Blog.findAll({
      raw: true,
      nest: true,
      where: { user_id: req.session.user.dataValues.user_id },
    });

    res.render("dashboard-page", { userBlogs, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;