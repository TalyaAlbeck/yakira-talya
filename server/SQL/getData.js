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

function getData(username = "", columns, table, response, type, showMoreSum) {
  console.log("connected");
  if (table === "comment") {
    con.query(
      `SELECT ${columns} FROM ${table} WHERE post_id = ${type}`,
      (err, res) => {
        if (err) {
          console.log(err);
        }
        if (res.length === 0) {
          response.status(404).send({
            text: `you have no ${table}`,
          });
        } else {
          response.status(200).send({ text: res });
        }
      }
    );
  } else {
    con.query(
      `SELECT id FROM user WHERE username = ${username}`,
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          let where;
          res.length === 0
            ? (where = `LIMIT 3 OFFSET ${showMoreSum}`)
            : (where = `WHERE ${table}.${type} = ${res[0].id}`);
          con.query(`SELECT ${columns} FROM ${table} ${where}`, (err, res) => {
            if (err) throw err;
            if (res.length === 0) {
              response.status(404).send({
                text: `you have no ${table}`,
              });
            } else {
              con.query(`SELECT COUNT(*) FROM ${table}`, (err, resp) => {
                if (err) {
                  console.log(err);
                }
                if (showMoreSum * 3 - 2 > resp[0]["COUNT(*)"]) {
                  response
                    .status(200)
                    .send({ text: res, amount: "you have no more posts" });
                } else {
                  response.status(200).send({ text: res });
                }
              });
            }
          });
        }
      }
    );
    return response;
  }
}

exports.getData = getData;
