var express = require("express");
var router = express.Router();
const { checkUserExisting } = require("../SQL/select");

router.post("/", async function (req, res) {
    checkUserExisting(req.body.username, req.body.password, req.body.email, req.body.phone, res);
});

module.exports = router;
