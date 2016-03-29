var express = require('express');
var app = express();
var messageController = require('./message/messageController');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uri;
if (process.env.NODE_ENV === 'test'){
  uri = 'mongodb://student:codesmith@ds059692.mongolab.com:59692/jaerodb';
}else{
  uri = 'mongodb://student:codesmith@ds037262.mongolab.com:37262/calendar';
}
mongoose.connect(uri);

app.use(bodyParser.json())

app.get('/messages', messageController.index);
app.post('/messages', messageController.create);


app.use(express.static(__dirname +'./../'));


app.listen(3000);
