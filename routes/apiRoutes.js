var db = require("../models");

module.exports = function (app) {

  var userID = "";

  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      id: req.body.id,
      email: req.body.email,
      password: req.body.password
    })
      .then(function (dbSignup) {
        res.json(dbSignup);
      });
  });


  app.get("/api/signin/:email", function (req, res) {
    db.User.findOne({ where: { email: req.params.email } })
      .then(function (dbSignIn) {
        res.json(dbSignIn);
        console.log(dbSignIn.dataValues.id);
        userID = dbSignIn.dataValues.id;


      });
  });


  app.post("/api/username/meta", function (req, res) {
    db.Meta.create({
      user_firstname: req.body.user_firstname,
      user_lastname: req.body.user_lastname,
      user_twitter: req.body.user_twitter,
      user_linkedin: req.body.user_linkedin,
      user_github: req.body.user_github,
      user_website: req.body.user_website,
      UserId: uID

  })
      .then(function (dbMeta) {
        res.json(dbMeta);
      });
  });

  app.get("/api/username/meta", function (req, res) {
    db.Meta.findOne({
      where: { UserId: userID },
      include: [db.User]
    }).then(function (dbMeta) {
      res.json(dbMeta);
    });
  });

};
