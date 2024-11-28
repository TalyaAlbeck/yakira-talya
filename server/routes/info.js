var express = require('express');
var router = express.Router();
const { getData } = require("../SQL/getData");

router.get('/:username', function (req, res) {
  getData(JSON.stringify(req.params.username), "*", "user", res, "id");
});

module.exports = router;
