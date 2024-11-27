var express = require("express");
var mysql = require('mysql')
var router = express.Router();
const { checkUserExisting } = require("../SQL/select");

router.post("/", async function (req, res) {
    checkUserExisting(req.body.username, req.body.password, res);
});


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "usersDataBase",
});

con.connect((err) => {
    if (err) throw err;
});

router.post("/info", async function (req, res) {
    const item = `'${req.body.username}', '${req.body.email}', '${req.body.phone}'`
    let response;
    console.log("connected");
    con.query(`INSERT INTO user (username, email, phone) VALUES (${item})`, (err, queryResault) => {
        if (err) {
            console.log('err: ', err);
            console.log("---------")
            res.status(450).json({ text: "some error :(" })
        } else {
            response = "user added!";
            res.status(200).json({ text: "user created" })
        }
    });
});

module.exports = router;
