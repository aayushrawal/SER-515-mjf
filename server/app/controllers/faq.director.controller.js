const db = require("../models");
const Faq = db.faqs;

// create and save a user
exports.create = (req, res) => {
  // Validate request for correct input data
  if (!req.body.que) {
    res.status(400).send({ message: "que missing." });
    return;
  }

  if (!req.body.ans) {
    res.status(400).send({ message: "ans missing." });
    return;
  }

  const faq = new Faq({
    que: req.body.que,
    ans: req.body.ans
});

  // save user to database
  faq
    .save(faq)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to enter faq. Some error occured.",
      });
    });
};

exports.findAll = (req, res) => {
  const {que} = req.body.que;
  Faq.find(que)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FAQs."
      });
    });
};