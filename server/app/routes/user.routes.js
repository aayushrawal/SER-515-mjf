module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  const router = require("express").Router();

  // register a user
  router.post("/registration", users.create);
  router.post("/login", users.findOne);
  router.get("/team-list", users.findAll);

  app.use("https://sparkys-league-server.herokuapp.com/api/users", router);
};
