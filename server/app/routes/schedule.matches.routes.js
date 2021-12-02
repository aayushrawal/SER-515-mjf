module.exports = (app) => {
    const assignteams = require("../controllers/schedule.matches.controller");
  
    const router = require("express").Router();
  
    // Assign Matches to teams 
    router.post("/assign-matches", assignteams.assign);
  
    app.use("https://sparkys-league-server.herokuapp.com/api/team-applications", router);
  };
  