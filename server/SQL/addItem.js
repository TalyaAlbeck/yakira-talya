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

function addItem(type, columns, item) {
  let response;
  console.log("connected");
  con.query(`INSERT INTO ${type} (${columns}) VALUES (${item})`, (err, res) => {
    if (err) {
      throw err
    } else response = "row added!";
    console.log("response: ", response);
    console.log(`${type} added!`);
  });
  return response;
}

exports.addItem = addItem;

