module.exports = function(sequelize, DataTypes) {
  var PresetGoals = sequelize.define("goalsDB", {
    type: DataTypes.STRING,
    steps: DataTypes.STRING
  });
  return PresetGoals;
};
