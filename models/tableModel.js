module.exports = function(sequelize, DataTypes) {
  var Goals = sequelize.define("goalsDB", {
    stepID: DataTypes.STRING, //foreign key pointing to ID in presetGoals.
    achieved: DataTypes.BOOLEAN //only thing Jacob needs to be aware of on the front end is this.
  });
  return Goals;
};
