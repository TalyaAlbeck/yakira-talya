var express = require('express');
var router = express.Router();
const { addItem } = require('./../SQL/addItem')


router.post('/user', function (req, res) {
    console.log("start");

    addItem("user", "username, email, phone", { username: JSON.stringify(req.body.username), email: JSON.stringify(req.body.email), phone: JSON.stringify(req.body.phone) })
    // addItem("user", "username, email, phone", `"talya", "talya@nini.com", "0520000000"`)
    res.send(res);
});

module.exports = router;