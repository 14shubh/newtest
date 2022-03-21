require("../util/database_config");
const User = require("../model/signinMode");

exports.homepage = (req, res, next) => {
  res.render("index.ejs", {
    title: "Home Page",
    isLoggedIn: req.session.CurrentUser,
    UserName: req.session.CurrentUserName,
  });
};

exports.SignInPage = (req, res, next) => {
  res.render("SignIn.ejs", {
    title: "Sign In",
    isLoggedIn: "",
    UserName: "",
  });
};

exports.SignUpPage = (req, res, next) => {
  res.render("SignUp.ejs", {
    title: "Sign Up",
    isLoggedIn: "",
    UserName: "",
  });
};

exports.SignOut = (req, res, next) => {
    req.session.CurrentUser = null;
    req.session.destroy();
    res.redirect('/');
};

// Post Requests

exports.SignInPost = (req, res, next) => {
  User.findOne(req.body)
    .then((results) => {
      req.session.CurrentUser = results._id;
      req.session.CurrentUserName = results.name;

      res.render("index.ejs", {
        title: "Home Page",
        isLoggedIn: req.session.CurrentUser,
        UserName: req.session.CurrentUserName,
      });
    })
    .catch((error) => {
      console.log("Loggin Failed");
    });
};

exports.SignUpPost = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile * 1,
  });

  user
    .save()
    .then((result) => {
      console.log("Registration Successful");
      res.redirect("/sign-in");
    })
    .catch((error) => {
      console.log("Registration Failed");
    });
};
