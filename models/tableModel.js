module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.define("goalsDB", {
    steps: DataTypes.STRING,
    achieved: DataTypes.BOOLEAN,
    rating: {
      type: DataTypes.INTEGER,
      min: 1,
      max: 5
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  return Sequelize;
};
