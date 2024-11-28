var express = require("express");
var router = express.Router();
const { getData } = require("../SQL/getData");
const { addItem } = require("../SQL/addItem");
const { deleteItem } = require("../SQL/deleteItem");

router.get("/:username", function (req, res, next) {
  getData(JSON.stringify(req.params.username), "id, todo", "todo", res, "user_id");
});

router.post("/", function (req, res, next) {
  console.log("req.body.username: ", req.body.username);
  const result = addItem(
    "todo",
    "user_id, todo",
    `${JSON.stringify(req.body.todo)}`,
    JSON.stringify(req.body.username),
    res
  );
});

router.delete("/", function (req, res, next) {
  deleteItem("todo", req.body.itemId, res);
});

module.exports = router;
