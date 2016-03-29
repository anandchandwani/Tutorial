var config = require('config');
var mongoose = require('mongoose');
var Application = require('./models/applyModel');
var Pending = require('./models/pendingModel');
var User = require('./models/userModel');
var Promise = require('bluebird');

console.log('connecting')
mongoose.connect(config.get('mongo'), function() {

  console.log('connected');

  User.find({ _id: '5946100' }, function(err, data) {
    // var promises = [];

    data.forEach(function(record) {
      record.applications = ['55f34acee15776e3021de8fd'];
      console.log(record);
      record.save();
    });

    // mongoose.connection.close();
    // Promise.all(promises).then(function() {
    //   mongoose.connection.close();
    // })
  });
});

