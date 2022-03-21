require("../util/database_config");
const Admin = require("../model/AdminSignInMode");

exports.AddProductPage = (req,res,next)=>{
    res.render('Admin_views/Add-Products.ejs',{
        title : 'Add Product',
        isLoggedIn : req.session.CurrentAdminId,
        AdminName : req.session.CurrentAdmin
    });
};

exports.DashboardPage = (req,res,next)=>{
    res.render('Admin_views/Dashboard.ejs',{
      title : 'Admin Dashboard',
      AdminName : req.session.CurrentAdmin,
      isLoggedIn : req.session.CurrentAdminId
    })
};
exports.SignInPage = (req, res, next) => {
    res.render("Admin_views/SignIn.ejs", {
      title: "Admin Sign In",
      isLoggedIn: req.session.CurrentAdmin,
      AdminName: req.session.CurrentAdmin,
    });
};

exports.SignInPost = (req, res, next) => {
  Admin.findOne(req.body)
    .then((results) => {
      req.session.CurrentAdminId = results._id;
      req.session.CurrentAdmin = results.name;

      res.render("Admin_views/Dashboard.ejs", {
        title: "Dashboard",
        isLoggedIn: req.session.CurrentAdminId,
        AdminName:  req.session.CurrentAdmin,
      });
    })
    .catch((error) => {
      console.log("Loggin Failed");
    });
};