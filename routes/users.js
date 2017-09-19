var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

var expressValidator = require('express-validator');
router.use(expressValidator());
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Hello World!');
});

router.get('/login', function(req, res) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res) {
  res.send('respond with a resource');
});

// Passport LocalStrategy
passport.use(new LocalStrategy(
	function(username, password, done){
		User.getUserByUsername(username, function(err, user){
			if(err) throw err;
			if(!user){
				return done(null, false, {message: 'Unknown User'});
			}

			User.comparePassword(password, user.password, function(err, isMatch){
				if (err) throw err;
				if (isMatch){
					return done(null, user);
				} else {
					return done(null, false, {message: 'Invalid Password'});
				}
		});
	});
}));

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	User.getUserById(id, function(err, user){
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local'),
	function(req, res) {
  res.send(req.user.id);
});

router.post('/register', function(req, res) {
	console.log(req.body);

	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;

	req.checkBody('username', 'username must be defined').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password', 'Password length error').len(8, 30);

	var errors = req.validationErrors();

	if (errors){
		res.send({errors:errors});
	} else {
		var newUser = new User({
			email: email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err){
				throw err;
			} else {
				res.send(newUser.id);
				console.log(user);
			}

		});


	}


});




module.exports = router;
