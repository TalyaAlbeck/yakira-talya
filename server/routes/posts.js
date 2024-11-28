var express = require("express");
var router = express.Router();
const { getData } = require("../SQL/getData");
const { addItem } = require("../SQL/addItem");
const { deleteItem } = require("../SQL/deleteItem");

router.get("/:page", function (req, res, next) {
  getData(null, "*", "post", res, "user_id", req.params.page);
});

router.post("/", function (req, res) {
  console.log("req.body.username: ", req.body.username);
  const result = addItem(
    "post",
    "user_id, title, body",
    `${JSON.stringify(req.body.title)}, ${JSON.stringify(req.body.body)}`,
    JSON.stringify(req.body.username),
    res
  );
});

router.delete("/", function (req, res) {
  console.log(req.body);
  deleteItem("post", req.body.id, res);
});

module.exports = router;
