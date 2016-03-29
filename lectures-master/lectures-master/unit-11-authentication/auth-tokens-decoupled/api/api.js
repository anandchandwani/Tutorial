var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');
var Job = require('./models/job');
var jwt = require('./services/jwt');

var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/register', function(req, res) {

  User.findOne({email: req.body.email}, function(err, user) {
    if (err) throw err;
    if (user)
      return res.status(400).send({message: 'Email already registered'});

    user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    user.save(function(err) {
      createTokenAndSend(user, res);
    });
  });

});

app.post('/login', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) throw err;
    if (!user)
      return res.status(401).send({message: 'Invalid email/password'});

    user.comparePassword(req.body.password, function(err, isMatch) {
      if (err) throw err;
      if (!isMatch)
        return res.status(401).send({message: 'Invalid email/password'});
      createTokenAndSend(user, res);
    });

  });
});

function createTokenAndSend(user, res) {
  var payload = {
    sub: user.id,
  };
  var token = jwt.encode(payload, "shh..");
  res.status(200).send({
    user: user.toJSON(),
    token: token,
  });
}


app.get('/jobs', function(req, res) {
  if (!req.headers.authorization) return res.sendStatus(401);
  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, 'shh..');
  if (!payload.sub)
    res.status(401).send({message: 'Authentication failed.'});

  Job.find().lean().exec(function (err, jobs) {
    return res.json(jobs);
  });
});

mongoose.connect('mongodb://localhost/token');

var server = app.listen(3000, function() {
  console.log('API listening on port', server.address().port);
});
