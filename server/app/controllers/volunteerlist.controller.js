const db = require("../models");
const volunteerData = db.Volunteers;
const volunteers = require("../models/volunteerlist.json")

// create and assign match to volunteer
exports.create = (req, res) => {
    // Validate request for correct input data
    if (!req.body.VolunteerId) {
        res.status(400).send({ message: "volunteer id missing." });
        return;
    }

    if (!req.body.VolunteerName) {
        res.status(400).send({ message: "volunteer name missing." });
        return;
    }

    if (!req.body.VolunteerEmail) {
        res.status(400).send({ message: "volunteer email missing." });
        return;
    }

    if (!req.body.VolunteerVenue) {
        res.status(400).send({ message: "volunteer venue missing." });
        return;
    }

    // Create a volunteer
    const volunteer = new volunteerData({
        VolunteerId: req.body.VolunteerId,
        VolunteerName: req.body.VolunteerName,
        VolunteerEmail: req.body.VolunteerEmail,
        VolunteerVenue: req.body.VolunteerVenue,
    });

    // save volunteer to database
    volunteer
        .save(volunteer)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Unable to assign match to  volunteer. Some error occured.",
            });
        });
};


// get volunteer list
exports.volunteers = (req,res) => {

    const VolunteerList = volunteers.volunteers
    return res.status(200).send(VolunteerList)
  
}