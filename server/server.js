const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { user, pass } = require("./config.json");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the databse!", err);
    process.exit();
  });

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to sparky's soccer tournament" });
});

require("./app/routes/user.routes")(app);
require("./app/routes/referee.routes")(app);
require("./app/routes/hotel.routes")(app);
require("./app/routes/sponsor.routes")(app);
require("./app/routes/faq.director.routes")(app);
require("./app/routes/hotel.director.routes")(app);
require("./app/routes/volunteerlist.routes")(app);
require("./app/routes/team.application.routes")(app);
require("./app/routes/schedule.matches.routes")(app);

app.post("/sendemail/:email", (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${user}`,
      pass: `${pass}`,
  }});

  const mailOptions = {
    from: "foundationsofse@gmail.com",
    to: req.params.email ,
    subject: `Application Status`,
    html: `<p>There has been a change in your application status. Please login to the portal to see the update!</p><br><p>Regards,<br>Sparky\'s Soccer League</p>`,
  };


  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error"); 
    } else {
      console.log("Email sent: " + info.response);
      res.send("Sent Successfully");
    }
  });
});

app.post("/sendemail2/:email", (req, res, next) => {
  const transporter2 = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${user}`,
      pass: `${pass}`,
  }});

  const mailOptions2 = {
    from: "foundationsofse@gmail.com",
    to: req.params.email ,
    subject: `Match Schedule`,
    html: `<p>There has been a change in your match schedule. Please login to the portal to see the update!</p><br><p>Regards,<br>Sparky\'s Soccer League</p>`,
  };


  transporter2.sendMail(mailOptions2, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error"); 
    } else {
      console.log("Email sent: " + info.response);
      res.send("Sent Successfully");
    }
  });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
