var express = require("express");
var router = express.Router();
const { checkUserExisting } = require("../SQL/select");
const { addItem } = require("../SQL/addItem");

router.post("/", async function (req, res) {
    checkUserExisting(req.body.username, req.body.password, res);
});

router.post("/info", async function (req, res) {
    const userResult = addItem("user", "username, email, phone", `${JSON.stringify(req.body.username)}, ${JSON.stringify(req.body.email)}, ${JSON.stringify(req.body.phone)}`)
    res.json(userResult);
});

module.exports = router;
