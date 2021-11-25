module.exports = (app) => {
    const Volunteers = require("../controllers/volunteerlist.controller")
  
    const router = require("express").Router();
  
  
    router.get("/volunteer-list", Volunteers.volunteers);

    router.post("/assign-volunteer", Volunteers.create);
  
    app.use("/api/volunteer", router);
    
  };