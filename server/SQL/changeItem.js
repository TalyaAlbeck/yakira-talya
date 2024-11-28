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

function changeItem(type, update, item, id, response) {
    console.log("connected");
    try {
        con.query(
            `UPDATE ${type} SET ${update} = ${item} WHERE id = ${id}`,
            (err, res) => {
                if (err) {
                    response.status(404).send({
                        text: `was not able to add`,
                    });
                }
                response.status(200).send({ text: "checked changed!" });
            }
        );
    } catch (err) {
        response.status(404).send("there was some problem, the item didnt updated")
    }

    return response;
}

exports.changeItem = changeItem;
