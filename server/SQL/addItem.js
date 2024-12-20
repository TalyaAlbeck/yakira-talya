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

function addItem(type, columns, item, username = "", response) {
  console.log("connected");
  con.query(`SELECT id FROM user WHERE username = ${username}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      con.query(
        `INSERT INTO ${type} (${columns}) VALUES (${res[0].id}, ${item})`,
        (err, res) => {
          if (err) {
            response.status(404).send({
              text: `was not able to add`,
            });
          }
          response.status(200).send({ text: "text added" });
          console.log(`${type} added!`);
        }
      );
    }
  });

  return response;
}

exports.addItem = addItem;
