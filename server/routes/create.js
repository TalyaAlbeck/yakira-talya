var express = require("express");
var router = express.Router();
const { addItem } = require("./../SQL/addItem");

router.post("/user", function (req, res) {
  const result = addItem("user", "username, email, phone", {
    username: JSON.stringify(req.body.username),
    email: JSON.stringify(req.body.email),
    phone: JSON.stringify(req.body.phone),
  });
  if (err) {
    res = err;
  } else {
    res = "user added";
  }
  res.send("user added");
});

module.exports = router;
