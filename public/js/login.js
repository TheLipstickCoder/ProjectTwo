/* eslint-disable no-unused-vars */
var express = require("express"),
  app = express(),
  session = require("express-session");
app.use(
  session({
    secret: "2C44-4D44-WppQ38S",
    resave: true,
    saveUninitialized: true
  })
);

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "jacob" && req.session.admin) {
    return next();
  } else {
    return res.sendStatus(401);
  }
};

// Login endpoint
app.get("/login", function(req, res) {
  if (!req.query.username || !req.query.password) {
    res.send("login failed");
  } else if (
    req.query.username === "jacob" ||
    req.query.password === "jacobspassword"
  ) {
    req.session.user = "jacob";
    req.session.admin = true;
    res.send("login success!");
  }
});

// // Logout endpoint
// app.get("/logout", function(req, res) {
//   req.session.destroy();
//   res.send("logout success!");
// });

// // Registration endpoint
// app.get("/confirmation", auth, function(req, res) {
//   res.send("You can only see this after you've registered.");
// });

app.listen(3000);
console.log("app running at http://localhost:3000");
