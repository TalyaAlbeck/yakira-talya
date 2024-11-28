var express = require('express');
var router = express.Router();
const { getData } = require("../SQL/getData");

/* GET users listing. */
router.get('/:username', function (req, res) {
  getData(JSON.stringify(req.params.username), "*", "user", res, "id");
  // res.send('respond with a resource');
});

module.exports = router;
