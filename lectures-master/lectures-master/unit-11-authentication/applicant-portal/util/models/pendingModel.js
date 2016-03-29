var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pendingSchema = new Schema({
  _user: { type: Number, ref: 'User' },
  code: String,
  complete: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

pendingSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

pendingSchema.pre('remove', function(next) {
  var pend = this;
  this.model('User').update(
    { _id: pend._user }, 
    { pendings: undefined }, 
    {},
    next
  );
});

module.exports = mongoose.model('Pending', pendingSchema);
