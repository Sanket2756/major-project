const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/user");

// SIGNUP
router.route("/signup")
  .get(userController.signUpForm)
  .post(wrapAsync(userController.signup));

// LOGIN
router.route("/login")
  .get(saveRedirectUrl, userController.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginLogic
  );

// LOGOUT
router.get("/logout", userController.logoutForm);

module.exports = router;

