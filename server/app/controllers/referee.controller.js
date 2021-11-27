const db = require("../models");
const Referee = db.referee;

// create and save a Referee
exports.create = (req, res) => {
    // Validate request for correct input data
    if (!req.body.refereeName) {
        res.status(400).send({ message: "referee name missing." });
        return;
    }

    if (!req.body.refereeEmail) {
        res.status(400).send({ message: "referee email missing." });
        return;
    }

    if (!req.body.refereeUsername) {
        res.status(400).send({ message: "referee username missing." });
        return;
    }

    if (!req.body.refereePhonenumber) {
        res.status(400).send({ message: "referee phonenumber missing." });
        return;
    }

    if (!req.body.refereeDob) {
        res.status(400).send({ message: "referee DOB missing." });
        return;
    }

    if (!req.body.refereeEventcategory) {
        res.status(400).send({ message: "referee event category missing." });
        return;
    }


    // Create a referee
    const referee = new Referee({
        refereeName: req.body.refereeName,
        refereeEmail: req.body.refereeEmail,
        refereeUsername: req.body.refereeUsername,
        refereePhonenumber: req.body.refereePhonenumber,
        refereeDob: req.body.refereeDob,
        refereeEventcategory: req.body.refereeEventcategory,
        matchAssign: req.body.matchAssign
    });

    // save referee to database
    referee
        .save(referee)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Unable to register referee. Some error occured.",
            });
        });
};

exports.findAll = (req, res) => {
    const refereeName = req.query.refereeName;
    Referee.find(refereeName)
      .then(data => {
        console.log(refereeName);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving refereeName."
        });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    Referee.findByIdAndUpdate(req.params.id, req.body, { matchAssign: req.body.matchAssign })
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update referee with id=${id}. Maybe referee was not found!`
          });
        } else res.send({ message: "Referee was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating referee with id=" + id
        });
      });
  };