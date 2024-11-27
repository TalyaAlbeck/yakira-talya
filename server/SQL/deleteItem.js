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

function deleteItem(type, itemId, response) {
  console.log("connected");

  console.log(
    "`DELETE FROM ${type} WHERE id = ${itemId}`: ",
    `DELETE FROM ${type} WHERE id = ${itemId}`
  );
  con.query(`DELETE FROM ${type} WHERE id = ${itemId}`, (err, res) => {
    if (err) {
      response.status(500).send({
        text: `was not able to delete`,
      });
    } else {
      response.status(200).send({ text: `${type} deleted` });
      console.log(`${type} deleted!`);
    }
  });

  return response;
}

exports.deleteItem = deleteItem;
