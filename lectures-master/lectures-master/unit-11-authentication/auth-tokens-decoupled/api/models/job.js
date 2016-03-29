var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
  title: String,
});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;