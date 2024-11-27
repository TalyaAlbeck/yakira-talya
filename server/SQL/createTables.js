const mysql = require("mysql");
const fs = require("fs");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "usersDataBase",
});

async function createTable() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = `CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), email VARCHAR(255) UNIQUE NOT NULL, phone VARCHAR(100))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("TABEL CREATED!");
    });
    var sql = `CREATE TABLE IF NOT EXISTS password (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), password VARCHAR(15))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("TABEL CREATED!");
    });
    var sql = `CREATE TABLE IF NOT EXISTS todo (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, todo VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("TABEL CREATED!");
    });
    var sql = `CREATE TABLE IF NOT EXISTS post (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT , title VARCHAR(255), body LONGTEXT)`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("TABEL CREATED!");
    });
    var sql = `CREATE TABLE IF NOT EXISTS comment (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, post_id INT, comment MEDIUMTEXT)`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("TABEL CREATED!");
    });
  });
}

createTable();
