module.exports = (app) => {
    const referee = require("../controllers/referee.controller.js")

    const router = require("express").Router();

    // register a referee
    router.post("/registration", referee.create);

     app.use("/api/referee", router);
};