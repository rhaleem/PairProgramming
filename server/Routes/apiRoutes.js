const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const signedUpListFile = path.join(__dirname, "../data/signedUpList.json");
const signedUpData = fs.readFileSync(signedUpListFile);

router.post("/users", () => addNewUser);
router.get("/users", () => console.log("get/users is working"));

function addNewUser(req, res) {
  res.json({ status: "signed up" });

  const usersArray = listUsers();

  let newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  usersArray.push(newUser);
  fs.writeFileSync(signedUpListFile, JSON.stringify(usersArray));
  return usersArray;
}

function listUsers() {
  console.log("working");
  return JSON.parse(signedUpData);
}

module.exports = router;
