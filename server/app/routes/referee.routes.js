module.exports = (app) => {
    const referee = require("../controllers/referee.controller.js")

    const router = require("express").Router();

    // register a referee
    router.post("/registration", referee.create);

    router.get("/registration", referee.findAll);

    router.put("/assign-referee/:id", referee.update);

    app.use("/api/referee", router);
};