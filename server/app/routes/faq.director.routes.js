module.exports = (app) => {
    const faq_director = require("../controllers/faq.director.controller.js");
  
    const router = require("express").Router();
  
    router.post("/faq-director", faq_director.create);
    router.get("/faq-director", faq_director.findAll);
    app.use("/api/faq", router);
  };
  