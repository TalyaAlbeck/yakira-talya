var express = require("express");
var router = express.Router();
const { checkUser } = require("../SQL/select");

router.post("/", async function (req, res) {
  checkUser(req.body.username, req.body.password, res);
});

module.exports = router;
