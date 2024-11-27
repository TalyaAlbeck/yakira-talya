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

function checkUser(name, password) {
  console.log("connected");
  try {
    con.query(
      `SELECT * FROM password WHERE username = ${name} AND password = ${password}`,
      (err, res) => {
        if (err) throw err;
        console.log(`${type} added!`);
      }
    );
  } catch (err) {
    console.log("this user does not exist");
  }
}

exports.addItem = addItem;
