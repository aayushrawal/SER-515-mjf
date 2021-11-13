const db = require("../models");
const Sponsor = db.sponsors;
const fs = require("fs");
const path = require("path");

// create and save a sponsor
exports.create = (req, res) => {
  console.log("Got in here!");
  // Validate request for correct input data
  if (!req.body.sponsorName) {
    res.status(400).send({ message: "sponsor name missing." });
    return;
  }

  if (!req.body.sponsorImage) {
    res.status(400).send({ message: "sponsor image missing." });
    return;
  }

  // Create a sponsor
  const sponsor = new Sponsor({
    sponsorName: req.body.sponsorName,
    sponsorImage: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  });

  console.log(sponsor);

  // save sponsor to database
  sponsor
    .save(sponsor)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to add sponsor. Some error occured.",
      });
    });
};
