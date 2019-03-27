var db = require("../models");

module.exports = function(app) {

  // Get applicable goal
  app.get("/api/type/:goal", function(req, res) {
    var goal = req.params.goal;
    switch (goal) {
      case "career": 
        db.PresetGoals.findAll({
          where: {
            type: "career"
          }.then(function(result){
            return (res.json(result))
          })
        });
      case "healthfit":
        db.PresetGoals.findAll({
          where: {
            type: "healthfit"
          }.then(function(result){
            return (res.json(result))
          })
        });
      case "book":
        db.PresetGoals.findAll({
          where: {
            type: "book"
          }.then(function(result){
            return (res.json(result))
          })
        });
      case "business":
        db.PresetGoals.findAll({
          where: {
            type: "business"
          }.then(function(result){
            return (res.json(result))
          })
        });
      case "hobby":
        db.PresetGoals.findAll({
          where: {
            type: "hobby"
          }.then(function(result){
            return (res.json(result))
          })
        });
    }

  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.PresetGoals.create(req.body).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.PresetGoals.destroy({ where: { id: req.params.id } }).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });
};

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
