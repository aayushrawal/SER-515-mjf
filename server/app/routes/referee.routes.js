module.exports = (app) => {
  const referee = require("../controllers/referee.controller.js");

  const router = require("express").Router();

  // register a referee
  router.post("/registration", referee.create);
  // get all referees
  router.get("/referee-list", referee.findAll);

  app.use("/api/referee", router);
};
