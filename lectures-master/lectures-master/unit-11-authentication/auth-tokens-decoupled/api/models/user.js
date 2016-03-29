var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.toJSON = function() {
  var user = this.toObject();
  delete user.password;
  return user;
};

userSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

var User = mongoose.model('User', userSchema);

module.exports = User;