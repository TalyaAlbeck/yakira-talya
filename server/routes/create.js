var express = require("express");
var router = express.Router();
const { addItem } = require("./../SQL/addItem");

router.post('/user', function (req, res) {
  console.log("start");

  const result = addItem("user", "username, email, phone", `${JSON.stringify(req.body.username)}, ${JSON.stringify(req.body.email)}, ${JSON.stringify(req.body.phone)}`)
  res.json(result);
});

router.post('/post', function (req, res) {
  console.log("start");

  const result = addItem("post", "user_id, title, body", `${req.body.user_id}, ${JSON.stringify(req.body.title)}, ${JSON.stringify(req.body.body)}`)
  res.json(result);
});

router.post('/comment', function (req, res) {
  console.log("start");

  const result = addItem("comment", "post_id, user_id, comment", `${req.body.post_id}, ${JSON.stringify(req.body.user_id)}, ${JSON.stringify(req.body.comment)}`)
  res.json(result);
});

router.post('/todo', function (req, res) {
  console.log("start");

  const result = addItem("todo", "user_id, todo", `${req.body.user_id}, ${JSON.stringify(req.body.todo)}`)
  res.json(result);
});

router.post('/password', function (req, res) {
  console.log("start");

  const result = addItem("password", "username, password", `${JSON.stringify(req.body.username)}, ${JSON.stringify(req.body.password)}`)
  res.json(result);
});

module.exports = router;
