const mysql = require("mysql");
const fs = require("fs");
const { addItem } = require("./addItem");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "z10mz10m",
	database: "usersDataBase",
});

con.connect((err) => {
	if (err) throw err;
});

function checkUser(name, password, response) {
	console.log("connected");

	con.query(
		`SELECT * FROM password WHERE username = ${JSON.stringify(
			name
		)} AND password = ${JSON.stringify(password)}`,
		(err, res) => {
			if (err) throw err;
			console.log("res: ", res);

			if (res.length === 0) {
				response.status(404).send({
					text: "username/password are incorrect",
				});
			}
			response.status(200).send({ text: "user entered" });
		}
	);
}

exports.checkUser = checkUser;

function checkUserExisting(name, password, response) {
	try {

		console.log("connected");

		con.query(
			`SELECT * FROM password WHERE username = ${JSON.stringify(name)}`,
			(err, res) => {
				if (err) {
					console.log('err: ', err);
					console.log("---------")
					response.status(450).json({ text: "some error 0.1 :(" })
				} else if (res.length === 0) {
					console.log("---------------res: ", res);

					// const passwordResult = addItem("password", "username, password", `${JSON.stringify(name)}, ${JSON.stringify(password)}`)

					const item = `'${name}', '${password}'`
					con.query(`INSERT INTO password (username, password) VALUES (${item})`, (err) => {
						if (err) {
							console.log('err: ', err);
							console.log("---------")
							response.status(450).json({ text: "some error :(" })
						} else {
							response.status(200).json({ text: "user created" })
						}
					});

					response.status(200).json({ text: "user entered" });
				} else {
					response.status(450).json({
						text: "this user is alreadt exists",
					});

				}
			}
		);
	} catch (err) {
		console.log(err);
	}
}

exports.checkUserExisting = checkUserExisting;

