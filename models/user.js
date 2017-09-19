var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// toLower function
function toLower (str) {
    return str.toLowerCase();
}
// User Schema
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
		set: toLower
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// Validate if data already exist !
// var userSchema = new Schema({
//       name: {
//         type: String,
//         validate: {
//           validator: function(v, cb) {
//             User.find({username: v}, function(err,docs){
//                cb(docs.length == 0);
//             });
//           },
//           message: 'User already exists!'
//         }
//       }
//     });

var User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash){
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch){
		if(err) throw err;
		callback(null, isMatch);
	});
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}
