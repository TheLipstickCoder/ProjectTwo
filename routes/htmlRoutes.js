/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  // Load registration/sign up page
  app.get("/registration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/registration.html"));
  });

  // Load registration confirmation page
  app.get("/confirmation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/confirmation.html"));
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load user page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/userUpdate", function(req,res){
    res.sendFile(path.join(__dirname, "../public/userupdate.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
