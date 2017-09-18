var express = require('express');
var router = express.Router();

var user = require('../models/user');

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

router.get('/login', function(req, res) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  // res.send('respond with a resource');
});

router.post('/register', function(req, res) {
  // res.send('respond with a resource');
	var errors = req.validationErrors();

	if (errors){

	} else {
		var newUser = new User({
			email: email,
			username: username,
			password: password
		});

		User.creatUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		res.redirect('/users/login');
	}


});




module.exports = router;
