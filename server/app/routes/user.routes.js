module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  const router = require("express").Router();

  // register a user
  router.post("/registration", users.create);
  router.post("/login", users.findOne);

  app.use("/api/users", router);
};
