const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const signedUpListFile = path.join(__dirname, "../data/signedUpList.json");
const signedUpData = fs.readFileSync(signedUpListFile);

router.post("/", addNewUser);

function addNewUser(req, res) {
  res.json({ status: "signed up" });
}

module.exports = router;
