// connecting to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://andy:corn@ds033113.mongolab.com:33113/publicsite');


// declaring schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  github_login: String,
  name: String,
  email: String,
  pendings: { type: Schema.Types.ObjectId, ref: 'Pending' },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);



// read or write to database
User.find({ username: 'andy'}, function(err, andy) {
  reply(andy);
});

User.remove({ username: 'andy'}, function(err) {
  reply();
});

User.findByIdAndUpdate(
  req.auth.credentials._id,
  { $push: { applications: record._id } },
  { safe: true, new: true },
  function(err, user) {
    if (err) return reply(Boom.badImplementation(err));
    sendEmail(req);
    reply(record);
  }
);


