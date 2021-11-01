module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  const router = require("express").Router();

  // register a user
  router.post("/registration", users.create);

  app.use("/api/users", router);
};
