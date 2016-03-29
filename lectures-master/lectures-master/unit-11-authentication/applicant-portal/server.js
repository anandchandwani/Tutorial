var express = require('express');
var app = express();
var fs = require('fs');
var config = require('config');
var mongoose = require('mongoose');
mongoose.connect(config.get('mongo')); 

var authCont = require('./util/controllers/authController')
var applyCont = require('./util/controllers/applyController');
var pendingCont = require('./util/controllers/pendingController');
var userCont = require('./util/controllers/userController');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(cookieParser());


//redirect to login page unless logged in
app.use('/', authCont.verify);


app.get('/login', authCont.new);
app.post('/login', urlencodedParser, authCont.create);
app.get('/logout', authCont.destroy);

app.get('/apps', applyCont.index);
app.put('/apps/:id', jsonParser, applyCont.update);
app.delete('/apps/:id', jsonParser, applyCont.destroy);

app.get('/pendings', pendingCont.index);
app.delete('/pendings/:id', jsonParser, pendingCont.destroy);

app.get('/users', userCont.index);
app.delete('/users/:id', jsonParser, userCont.destroy);
app.put('/users/:id', jsonParser, userCont.update);

app.use(express.static(__dirname + '/public'));

app.listen(8080, function() {
  console.log("listening at https://localhost:8080");
});

module.exports = app;
