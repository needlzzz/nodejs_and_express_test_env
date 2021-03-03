const express = require("express");
const router = express.Router();
const members = require("./Members");

//get single member
router.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
  } else {
    res.status(400).json({ msg: `No Member with the ID of ${req.params.id}` });
  }
});

//gets all members
router.get("/api/members", (req, res) => {
  res.json(members);
});

module.exports = router;
