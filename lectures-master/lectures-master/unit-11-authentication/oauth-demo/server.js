var express = require('express');
var app = express();
var request = require('request');
var qs = require('querystring');
var cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/github/auth', function(req, res) {
  // build the url with its query string
  var url = 'https://github.com/login/oauth/authorize?' +
            'scope=user&' +
            'redirect_uri=http://localhost:3000/github/callback&' +
            'client_id=704423045a4969aeb585';
  res.redirect(url);
});

app.get('/github/callback', function(req, res) {
  // console.log('auth code', req.query.code);
  var tokenQuery = {
    client_id: '704423045a4969aeb585',
    client_secret: '2af5ead0e75af3695c3eac644f04052c1f44b1a4',
    code: req.query.code,
    accept: 'application/json'
  };
  // this time we're using the built-in "querystring" module to serialize an object to a query string
  var url = 'https://github.com/login/oauth/access_token?' + qs.stringify(tokenQuery);
  var options = {
    url: url,
    headers: {
      'user-agent': 'evil'  // this is required by GitHub API. but it can be ANY string
    },
    json: true
  };
  request(options, function(err, resp, body) {
    if (err) return res.send(500, err);
    console.log(body);
    res.cookie('token', body.access_token);
    var options = {
      url: 'https://api.github.com/user',
      headers: {
        'user-agent': 'evil',
        'Accept': 'application/json',
        'Authorization': 'token ' + body.access_token
      },
      json: true
    };
    request(options, function(err, resp, body) {
      res.send(body);
    });
  });
});

app.get('/user', function(req, res) {
  var token = req.cookies.token;
  var options = {
    url: 'https://api.github.com/user',
    headers: {
      'user-agent': 'evil',
      'Accept': 'application/json',
      'Authorization': 'token ' + token
    },
    json: true
  };
  request(options, function(err, resp, body) {
    res.send(body);
  });
});

app.listen(3000, function() {
  console.log('listening at http://localhost:3000');
});
