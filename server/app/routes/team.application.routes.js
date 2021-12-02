module.exports = (app) => {
    const teamApplications = require("../controllers/team.applications.controller");
  
    const router = require("express").Router();
  
    // accept Team Applications
    router.post("/accept-reject", teamApplications.acceptreject);
    router.get("/accepted-applications", teamApplications.getaccept);
  
    app.use("https://sparkys-league-server.herokuapp.com/api/team-applications", router);
  };
  