var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
	res.json([{
  	id: 1,
  	username: "jessica"
  }, {
  	id: 2,
  	username: "alex"
  }]);
});

module.exports = router;
