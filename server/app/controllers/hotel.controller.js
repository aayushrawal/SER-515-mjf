const db = require("../models");
const Hotel = db.hotels;

// create and save a user
exports.create = (req, res) => {
  // Validate request for correct input data
  if (!req.body.coachName) {
    res.status(400).send({ message: "coach name missing." });
    return;
  }

  if (!req.body.coachEmail) {
    res.status(400).send({ message: "coach email missing." });
    return;
  }

  // Create a user
  const hotel = new Hotel({
    coachName: req.body.coachName,
    coachEmail: req.body.coachEmail,
    
  });

  // save user to database
  hotel
    .save(hotel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to store user. Some error occured.",
      });
    });
};

// Retrieve all Coaches from the database
exports.findAll = (req, res) => {
  const coachName = req.query.coachName;
  var condition = coachName ? { coachName: { $regex: new RegExp(coachName), $options: "i" } } : {};

  Hotel.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Coaches."
      });
    });
};
