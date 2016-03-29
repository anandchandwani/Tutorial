// var Person = require('./person.js');
var Person = require('./person');  // omit the file extension
// import Person from './person';

// var andy = new Person('Andy');
// var alex = new Person('Alex');
//
// alex.greet(andy);
// alex.greet(andy);
// alex.greet(andy);
// console.log(counter);
// console.log('-----------------------------------------');


var fs = require('fs');
var file = `\
Hello world,
my name is
Andy`;
fs.writeFile('newFile.txt', file, function(err) { // watch out. asynchronous
  if (err) console.error(err);
});
//
//
var childProcess = require('child_process');
childProcess.exec('ls', function(err, stdout) {
  if (err) return console.error(err);
  console.log(stdout.toUpperCase());
});

// only works as root user sudo
childProcess.exec('reboot', function(err, stdout, stderr) { // also asynchronous
  console.log(stderr);
});
//
//
var request = require('request');

var req = request.get('https://www.google.com');
req.on('response', function(res) {
  console.log(res.statusCode);
  // console.log(res.headers);
});

var body = '';
req.on('data', function(d) {
  // console.log('\033[0;31m GOT DATA: \033[m' + d);
  body += d;
});

req.on('end', function() {
  // console.log(body);
});

console.log(__dirname);
