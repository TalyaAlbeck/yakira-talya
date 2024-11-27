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

function getData(username, columns, table, response) {
  console.log("connected");
  con.query(`SELECT id FROM user WHERE username = ${username}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      con.query(
        `SELECT ${columns} FROM ${table} WHERE ${table}.user_id = ${res[0].id}`,
        (err, res) => {
          if (err) throw err;
          if (res.length === 0) {
            response.status(404).send({
              text: `you have no ${table}`,
            });
          }
          response.status(200).send({ text: res });
        }
      );
    }
  });
  return response;
}

exports.getData = getData;
