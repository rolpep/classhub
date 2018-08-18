var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    post_title: DataTypes.STRING,
    post_content: DataTypes.TEXT,
    post_img: DataTypes.STRING,
    post_author: DataTypes.STRING,
    post_cat: DataTypes.STRING,
    post_tag: DataTypes.STRING,
    post_type: DataTypes.STRING





  });
  Post.associate = function(models) {
    Post.belongsTo(models.User)
  };
  return Post;
};


