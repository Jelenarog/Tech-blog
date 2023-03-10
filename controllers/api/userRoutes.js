const router = require("express").Router();
const { User } = require("../../models");
//const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in

// Register new user

router.post("/register", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userData;
      console.log("New user created");
      res.status(200).json({ message: "New account is successfully created" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username. Please try again!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    const { password, ...userData } = dbUserData;

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userData;

      res.status(200).json({ message: "You are now logged in!" });
    });

    // );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout
router.post("/logout", (req, res) => {

  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(204).end();
      }
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
