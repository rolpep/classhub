var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    user_firstname: DataTypes.STRING,
    user_lastname: DataTypes.STRING,
    user_twitter: DataTypes.STRING,
    user_linkedin: DataTypes.STRING,
    user_github: DataTypes.STRING,
    user_website: DataTypes.STRING


  });
  Post.associate = function(models) {
    Post.belongsTo(models.User)
  };
  return Post;
};


