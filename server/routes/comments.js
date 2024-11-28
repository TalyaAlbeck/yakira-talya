var express = require("express");
var router = express.Router();
const { getData } = require("../SQL/getData");
const { deleteItem } = require("../SQL/deleteItem");

router.get("/:postId", function (req, res) {
  getData(
    null,
    "id, user_id, comment",
    "comment",
    res,
    JSON.stringify(req.params.postId)
  );
});

router.delete("/", function (req, res) {
  deleteItem("comment", req.body.id, res);
});

module.exports = router;
