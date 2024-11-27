var express = require("express");
var router = express.Router();
const { checkUser } = require("../SQL/select");

router.post("/", function (req, res) {
  const result = checkUser(req.body.username, req.body.password);
  res.send("respond with a resource");
});

module.exports = router;
