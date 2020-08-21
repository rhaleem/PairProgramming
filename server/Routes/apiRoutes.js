const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const signedUpListFile = path.join(__dirname, "../data/signedUpList.json");
const signedUpData = fs.readFileSync(signedUpListFile);

router.post("/", (req, res) => res.json(addNewUser(req, res)));
router.get("/", (_req, res) => res.json(listUsers()));

function addNewUser(req, _res) {
  // res.json({ status: "signed up" });
  console.log("req.body", req.body);
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
  return JSON.parse(signedUpData);
}

// console.log(listUsers());

module.exports = router;
