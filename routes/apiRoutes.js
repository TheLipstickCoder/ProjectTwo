/* eslint-disable prettier/prettier */
/* eslint-disable indent */
var db = require("../models");

module.exports = function(app) {

  // Get applicable goal
  app.get("/api/type/:goal", function(req, res) {
        db.PresetGoals.findAll({
          where: {
            type: req.params.goal
          }.then(function(result){
            return (res.json(result));
          })
        });
    });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.PresetGoals.create(req.body).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  // Post a new example
  app.put("/api/newStep", function(req, res) {
    db.PresetGoals.update({
      steps: req.body.steps
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });
<<<<<<< HEAD
    // POST route for saving a new todo
    app.post("/api/userupdate", function(req, res) {
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.PresetGoals.create({
        type: req.body.type,
        steps: req.body.steps
      }).then(function(dbGoals) {
        // We have access to the new steps as an argument inside of the callback function
        res.json(dbGoals);
      });
    });
=======


  // POST route for saving a new todo
  app.post("/api/userupdate", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.PresetGoals.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbGoals) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbGoals);
    });
  });
>>>>>>> 3acdc4d7f361947f11fb617e3e2047731bfde101
};