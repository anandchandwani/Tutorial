var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
  _user: { type: Number, ref: 'User' },
  info: Array,
  education: Array,
  passion: String,
  projects: String,
  whyCodesmith: String,
  experience: String,
  src: String,
  fullName: String,
  age: Number,
  contactInfo: Array,
  refer: String,
  notes: String,
  interview: Date,
  status: { type: String, default: 'applied' },
  attempts: { type: Number, default: 0 },
  archive: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

appSchema.pre('remove', function(next) {
  var app = this;
  this.model('User').update(
    { _id: app._user }, 
    { $pull: { applications: app._id } }, 
    {},
    next
  );
});

appSchema.pre('save', function(next){
  this.updated_at = Date.now();
  next();
});


appSchema.pre('update', function() {
  this.update({}, { $set: { updated_at: new Date() } });
});

module.exports = mongoose.model('Application', appSchema);
