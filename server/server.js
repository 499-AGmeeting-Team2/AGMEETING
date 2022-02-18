const express = require("express");
// var fallback = require('express-history-api-fallback')
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
// import routes from "../client/routes";
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

// Bodyparser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Database
const db = require("./config/db");
const { models } = require("./config/db");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected .."))
  .catch((err) => console.log("Error: " + err));
/*try {
db.authenticate();
console.log("Connection has been established successfully.");
} catch (error) {
console.error("Unable to connect to the database:", error);
} */
// gets the model and the required route/controller
//app.use("/users", require("./controllers/users.controller"));

// we have to only get index.js and it will import all the models
const allmodels = require("./models/index");

//gets the data from signin page
app.post("/signin", (req) => {
  console.log(req.body);
  allmodels.User.create({
    email: req.body.email,
    password: req.body.password,
  });
});

// app.use(express.static("helper"));
// app.use("/", indexRoutes)
// gets the homepage
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });

  // do not use this
  // res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});
