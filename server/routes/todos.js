var express = require("express");
var router = express.Router();
const { getData } = require("../SQL/getData");
const { addItem } = require("../SQL/addItem");
const { deleteItem } = require("../SQL/deleteItem");
const { changeItem } = require('../SQL/changeItem')

router.get("/:username", function (req, res) {
  getData(JSON.stringify(req.params.username), "id, todo, checked", "todo", res, "user_id");
});

router.post("/", function (req, res) {
  console.log("req.body.username: ", req.body.username);
  const result = addItem(
    "todo",
    "user_id, todo",
    `${JSON.stringify(req.body.todo)}`,
    JSON.stringify(req.body.username),
    res
  );
});

router.patch("/", (req, res) => {
  const result = changeItem(
    "todo",
    "checked",
    `${JSON.stringify(req.body.checked)}`,
    `${req.body.id}`,
    res
  );
})

router.delete("/", function (req, res) {
  deleteItem("todo", req.body.itemId, res);
});

module.exports = router;
