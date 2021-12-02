module.exports = (app) => {
    const hotelsdirector = require("../controllers/hotel.director.controller.js");
  
    const router = require("express").Router();
  
    // register a user
    router.post("/hotel-director", hotelsdirector.create);
  
    //router.get("/booking", hotelsdirector.findAll);
  
    app.use("https://sparkys-league-server.herokuapp.com/api/hotels", router);
  };
  