module.exports = (app) => {
  const sponsor = require("../controllers/sponsor.controller.js");

  const router = require("express").Router();

  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });

  const upload = multer({ storage: storage });

  // register a sponsor
  router.post("/add-sponsor", upload.single("image"), sponsor.create);

  app.use("/api/sponsor", router);
};
