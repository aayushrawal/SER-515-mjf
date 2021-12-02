module.exports = (app) => {
  const hotels = require("../controllers/hotel.controller.js");

  const router = require("express").Router();

  // register a user
  router.post("/booking", hotels.create);

  router.get("/booking", hotels.findAll);

  app.use("https://sparkys-league-server.herokuapp.com/api/hotels", router);
};
