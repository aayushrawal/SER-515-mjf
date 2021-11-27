module.exports = (app) => {
  const referee = require("../controllers/referee.controller.js");

  const router = require("express").Router();

  // register a referee
  router.post("/registration", referee.create);
  // get all referees
  router.get("/referee-list", referee.findAll);
  // update a referee
  router.put("/update-status", referee.changeRefereeStatus);
  
  router.put("/assign-referee/:id", referee.update);

  app.use("/api/referee", router);
};

