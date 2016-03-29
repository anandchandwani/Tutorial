var mongoose = require('mongoose');
var Job = require('./models/job');

mongoose.connect('mongodb://andy:corn@ds041377.mongolab.com:41377/token');



var jobs = [
  'Cook',
  'Superhero',
  'Unicorn',
  'Code whisperer',
  'Toast inspector'
];


jobs.forEach(function(title) {
  var job = new Job({title: title});
  job.save();
});