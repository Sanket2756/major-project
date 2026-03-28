const User = require("../models/user");

module.exports.signUpForm = (req, res) => {
  res.render("users/signup");
};

module.exports.loginForm = (req, res) => {
  res.render("users/login");
};

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      req.flash("success", "Welcome to StayNest!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.loginLogic = (req, res) => {
  req.flash("success", "Welcome back to StayNest!");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  delete req.session.redirectUrl;
  res.redirect(redirectUrl);
};

module.exports.logoutForm = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.flash("success", "You are logged out now!");
    res.redirect("/listings");
  });
};