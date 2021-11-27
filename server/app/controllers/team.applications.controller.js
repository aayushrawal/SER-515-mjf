const db = require("../models")
const teamApplicaionsdata = db.TeamApplications

// Accept the Team Applications
exports.acceptreject = (req, res) => {
    // Validate request for correct input data
    if (!req.body.teamName) {
        res.status(400).send({ message: "Team name missing." });
        return;
    }

    if (!req.body.coachName) {
        res.status(400).send({ message: "Coach Name missing." });
        return;
    }

    if (!req.body.teamStatus) {
        res.status(400).send({ message: "Team Status missing." });
        return;
    }

    // Accept/Reject Team Applications
    const teamapplications = new teamApplicaionsdata({
        teamName: req.body.teamName,
        coachName: req.body.coachName,
        teamStatus: req.body.teamStatus,
    });

    // save action(Accept/Reject) to database
    teamapplications
        .save(teamapplications)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Unable to Accept/Reject Team Applications. Some error occured.",
            });
        });
};

exports.getaccept = (req, res) =>{
    teamApplicaionsdata.find({teamStatus : "accepted"})
    .then(data =>{
        res.send({
            message:"Retrieved Accepted Teams List",
            acceptedTeams:data,
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Coaches."
        });
    });
}
