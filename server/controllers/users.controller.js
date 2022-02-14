const express = require("express");
const router = express.Router();
// get the database
const db = require("../config/db");
// get the model
const users = require("../participant/users");

// the '/' means /users as we are exporting this
router.get("/", (req, res) => {
  res.status(200).send("/users");
});

module.exports = router;
