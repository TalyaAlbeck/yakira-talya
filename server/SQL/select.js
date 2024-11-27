const mysql = require("mysql");
const fs = require("fs");
const { addItem } = require("./addItem");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "usersDataBase",
});

con.connect((err) => {
  if (err) throw err;
});

function checkUser(name, password, response) {
  console.log("connected");

  con.query(
    `SELECT * FROM password WHERE username = ${JSON.stringify(
      name
    )} AND password = ${JSON.stringify(password)}`,
    (err, res) => {
      if (err) throw err;
      console.log("res: ", res);

      if (res.length === 0) {
        response.status(404).send({
          text: "username/password are incorrect",
        });
      }
      response.status(200).send({ text: "user entered" });
    }
  );
}

exports.checkUser = checkUser;

function checkUserExisting(name, password, response) {
  console.log("connected");

  con.query(
    `SELECT * FROM password WHERE username = ${JSON.stringify(name)} AND password = ${JSON.stringify(password)}`,
    (err, res) => {
      if (err) throw err;
      if (res.length === 0) {
        const passwordResult = addItem("password", "username, password", `${JSON.stringify(username)}, ${JSON.stringify(password)}`)
        res.json(passwordResult);
        response.status(200).send({ text: "user entered" });
      } else {
        response.status(450).send({
          text: "this user is alreadt exists",
        });
      }
    }
  );
}

exports.checkUserExisting = checkUserExisting;

