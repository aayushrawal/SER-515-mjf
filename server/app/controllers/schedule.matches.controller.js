const db = require("../models")
const assignmatches = db.AssignedMatches

// Assign the Matches
exports.assign = (req, res) => {
    // Validate request for correct input data
    if (!req.body.teamName) {
        res.status(400).send({ message: "Home Team name missing." });
        return;
    }

    if (!req.body.apponentTeam) {
        res.status(400).send({ message: "Apponenet Team Name missing." });
        return;
    }

    if (!req.body.matchVenue) {
        res.status(400).send({ message: "Match Venue missing." });
        return;
    }

    if (!req.body.teamCategory) {
        res.status(400).send({ message: "Team Category missing." });
        return;
    }

    // Accept/Reject Team Applications
    const AssignedMatches = new assignmatches({
        teamName: req.body.teamName,
        apponentTeam: req.body.apponentTeam,
        matchVenue: req.body.matchVenue,
        teamCategory: req.body.teamCategory,
    });

    // save action(Accept/Reject) to database
    AssignedMatches
        .save(AssignedMatches)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Unable to Assign match to Team. Some error occured.",
            });
        });
};