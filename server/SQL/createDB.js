
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m"
});

function createDB() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE usersDataBase", function (err, result) {
            if (err) throw err;
            console.log("Database created");
            console.log("res: ", result);
        });
    });

}

createDB();