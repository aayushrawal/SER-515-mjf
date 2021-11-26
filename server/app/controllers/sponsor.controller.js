const db = require("../models");
const mongoose = require("mongoose");
const Sponsor = db.sponsors;

// create and save a sponsor
exports.create = (req, res, next) => {
  // Validate request for correct input data
  if (!req.body.sponsorName) {
    res.status(400).send({ message: "sponsor name missing." });
    return;
  }

  if (!req.body.sponsorType) {
    res.status(400).send({ message: "sponsor type missing." });
    return;
  }

  if (!req.file) {
    res.status(400).send({ message: "sponsor image missing." });
    return;
  }

  // Create a sponsor
  const url = req.protocol + "://" + req.get("host");
  const sponsor = new Sponsor({
    _id: new mongoose.Types.ObjectId(),
    sponsorName: req.body.sponsorName,
    sponsorType: req.body.sponsorType,
    sponsorImage: url + "/uploads/" + req.file.filename,
  });

  // save sponsor to database
  sponsor
    .save()
    .then((result) => {
      res.status(200).send({
        status: "ok",
        message: "sponsor added successfully!",
        sponsorName: {
          _id: result._id,
          sponsorImage: result.sponsorImage,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).send({
          message: err.message || "Unable to add sponsor. Some error occured.",
          status: "fail",
        });
    });
};

exports.findAll = (req, res) => {
  Sponsor.find()
    .then((data) => {
      res.status(200).send({
        message: "Sponsor list retrieved successfully!",
        sponsors: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sponsors.",
      });
    });
};
