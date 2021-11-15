const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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
require("./app/routes/faq.director.routes")(app);
require("./app/routes/hotel.director.routes")(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
