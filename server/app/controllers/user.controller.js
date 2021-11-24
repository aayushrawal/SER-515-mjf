const db = require("../models");
const User = db.users;
const directors = require("../models/directors.json");

// create and save a user
exports.create = (req, res) => {
  // Validate request for correct input data
  if (!req.body.coachFirstName) {
    res.status(400).send({ message: "coach first name missing." });
    return;
  }

  if (!req.body.coachLastName) {
    res.status(400).send({ message: "coach last name missing." });
    return;
  }

  if (!req.body.coachPhoneNumber) {
    res.status(400).send({ message: "coach phone number missing." });
    return;
  }

  if (!req.body.coachEmail) {
    res.status(400).send({ message: "coach email missing." });
    return;
  }

  if (!req.body.teamName) {
    res.status(400).send({ message: "team name missing." });
    return;
  }

  if (!req.body.teamCaptainName) {
    res.status(400).send({ message: "team captain name missing." });
    return;
  }

  if (!req.body.teamPlayers.length > 0) {
    res
      .status(400)
      .send({ message: "must have registered atleast one team player." });
    return;
  } else {
    for (let player of req.body.teamPlayers) {
      if (player.playerFullName === "") {
        res.status(400).send({ message: "player full name missing." });
        return;
      }
    }
  }

  // Create a user
  const user = new User({
    coachFirstName: req.body.coachFirstName,
    coachLastName: req.body.coachLastName,
    coachPhoneNumber: req.body.coachPhoneNumber,
    coachEmail: req.body.coachEmail,
    teamName: req.body.teamName,
    teamCaptainName: req.body.teamCaptainName,
    teamPlayers: req.body.teamPlayers,
  });

  // save user to database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to register user. Some error occured.",
      });
    });
};

exports.findOne = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const directorList = directors.users;

  const user = directorList.find((director) => director.username === username);

  if (!user) {
    res
      .status(404)
      .send({ message: "Cannot find user with username: " + username });
  } else {
    if (user.password === password) {
      res.status(200).send({ message: "successfully logged in!", user: user });
    } else {
      res.status(200).send({ message: "password is wrong!" });
    }
  }
};
