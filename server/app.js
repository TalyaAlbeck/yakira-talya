var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var createRouter = require("./routes/create");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/create", createRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

module.exports = app;
