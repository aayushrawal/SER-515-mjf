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

  //console.log(req.body);
  /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
      here we are using gmail as our service 
      In Auth object , we specify our email and password
    */
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${user}`, //replace with your email
      pass: `${pass}`, //replace with your password
    },
  });

  /*
      In mail options we specify from and to address, subject and HTML content.
      In our case , we use our personal email as from and to address,
      Subject is Contact name and 
      html is our form details which we parsed using bodyParser.
    */
  const mailOptions = {
    from: "foundationsofse@gmail.com", //replace with your email
    to: req.params.email , //replace with your email
    subject: `Application Status`,
    html: `<p>There has been a change in your application status. Please login to the portal to see the update!</p><br><p>Regards,<br>Sparky\'s Soccer League</p>`,
  };

  

  /* Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
     call back as parameter 
    */

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error"); // if error occurs send error as response to client
    } else {
      console.log("Email sent: " + info.response);
      res.send("Sent Successfully"); //if mail is sent successfully send Sent successfully as response
    }
  });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
