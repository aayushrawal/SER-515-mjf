module.exports = (app) => {
    const faq_director = require("../controllers/faq.director.controller.js");
  
    const router = require("express").Router();
  
    router.post("/faq-director", faq_director.create);
  
    app.use("/api/faq", router);
  };
  