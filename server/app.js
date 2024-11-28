var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var infoRouter = require("./routes/info");
var createRouter = require("./routes/create");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var todosRouter = require("./routes/todos");
var postsRouter = require("./routes/posts");
var commentsRouter = require("./routes/comments");

var app = express();

app.use(logger("dev"));
app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.options("*", cors());

app.use("/", indexRouter);
app.use("/info", infoRouter);
app.use("/create", createRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/todos", todosRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

module.exports = app;
