const sponsor = require("../controllers/sponsor.controller.js");

const router = require("express").Router();

const multer = require("multer");

const { v4: uuidv4 } = require("uuid");

const DIR = "uploads";

module.exports = (app) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, uuidv4() + "-" + fileName);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });

  // register a sponsor
  router.post("/add-sponsor", upload.single("sponsorImage"), sponsor.create);

  app.use("/api/sponsor", router);
};
