var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Meta = sequelize.define("Meta", {
    user_firstname: DataTypes.STRING,
    user_lastname: DataTypes.STRING,
    user_twitter: DataTypes.STRING,
    user_linkedin: DataTypes.STRING,
    user_github: DataTypes.STRING,
    user_website: DataTypes.STRING


  });
  Meta.associate = function(models) {
    Meta.belongsTo(models.User)
  };
  return Meta;
};


