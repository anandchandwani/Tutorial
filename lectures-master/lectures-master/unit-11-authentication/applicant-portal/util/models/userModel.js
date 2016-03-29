var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

var userSchema = new Schema({
  _id: String,
  github_login: String,
  name: String,
  email: String,
  pic_url: String,
  pendings: { type: Schema.Types.ObjectId, ref: 'Pending' },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  created_at: { type: Date, default: Date.now }
});

userSchema.pre('remove', function(next) {
  var user = this;

  var promises = [
    this.model('Application').remove({ _id: { $in: user.applications } }),
    this.model('Pending').remove({ _id: user.pendings }),
  ];
  Promise.all(promises).then(next);
});

module.exports = mongoose.model('User', userSchema);
