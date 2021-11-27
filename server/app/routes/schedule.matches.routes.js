module.exports = (app) => {
    const assignteams = require("../controllers/schedule.matches.controller");
  
    const router = require("express").Router();
  
    // Assign Matches to teams 
    router.post("/assign-matches", assignteams.assign);
  
    app.use("/api/team-applications", router);
  };
  