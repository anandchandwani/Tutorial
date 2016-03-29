var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', function(req, res) {
  var userId = users.findIndex(function(obj) {
    return obj.username === req.body.username;
  });
  var user = users[userId];
  if (user.password === req.body.password) {
    res.cookie('userId', userId, {
      maxAge: 360000,
      // httpOnly: true,
    });
    res.redirect('/profile');
  } else {
    res.redirect('/');
  }
});

app.get('/profile', auth, function(req, res) {
  var userId = req.cookies.userId;
  var user = users[userId];
  res.write('hello ' + user.username);
  res.end();
});


function auth(req, res, next) {
  if (req.cookies.userId) next();
  else res.redirect('/');
}

var users = [
  { username: 'andy', password: 'corn' },
  { username: 'alex', password: 'corn' },
  { username: 'ragu', password: 'corn' },
];


app.listen(3000, function() {
  console.log('listening at http://localhost:3000');
});
