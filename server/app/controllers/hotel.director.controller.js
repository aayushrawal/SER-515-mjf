const db = require("../models");
const HotelDirector = db.hoteldirector;

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

  if (!req.body.coachVenue) {
    res.status(400).send({ message: "coach venue missing." });
    return;
  }


  // Create a user
  const hoteldirector = new HotelDirector({
    coachName: req.body.coachName,
    coachEmail: req.body.coachEmail,
    coachVenue:req.body.coachVenue,
    
  });

  // save user to database
  hoteldirector
    .save(hoteldirector)
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
// exports.findAll = (req, res) => {
//   const coachName = req.query.coachName;
//   var condition = coachName ? { coachName: { $regex: new RegExp(coachName), $options: "i" } } : {};

//   HotelDirector.find(condition)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Coaches."
//       });
//     });
// };
