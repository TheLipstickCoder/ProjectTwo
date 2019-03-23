module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.define("goalsDB", {
    steps: DataTypes.STRING,
    achieved: DataTypes.BOOLEAN,
  });
  return Sequelize;
};
