module.exports = (app) => {
    const teamApplications = require("../controllers/team.applications.controller");
  
    const router = require("express").Router();
  
    // accept Team Applications
    router.post("/accept-reject", teamApplications.acceptreject);
  
    app.use("/api/team-applications", router);
  };
  