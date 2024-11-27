const mysql = require("mysql");
const fs = require("fs");

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
