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
  console.log("connected");
  con.query(
    `INSERT INTO ${type} (${columns}) VALUES (${item.username}, ${item.email}, ${item.phone})`,
    (err, res) => {
      if (err) throw err;
      console.log(`${type} added!`);
    }
  );
}

exports.addItem = addItem;
