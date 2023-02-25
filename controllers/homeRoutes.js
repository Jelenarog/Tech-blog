const router = require("express").Router();
const withAuth = require("../utils/auth");

//import models
const { User, Blog } = require("../models");

//Dashboard Route
// router.get("/dashboard", withAuth, (req, res) => {
//   res.render("dashboard-page", { loggedIn: req.session.loggedIn });
// });

//Home page Route
router.get("/", async (req, res) => {
  try {
    const existingPosts = await Blog.findAll({
      raw: true,
      nest: true,
      attributes: {
        exclude: ["text"],
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

    res.render("home-page", { existingPosts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Registration Route
router.get("/register", (req, res) => {
  res.render("register-page");
});

// Login route
router.get("/login", (req, res) => {
  res.render("login-page");
});

module.exports = router;
