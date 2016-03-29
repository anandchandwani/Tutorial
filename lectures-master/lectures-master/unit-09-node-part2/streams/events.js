var EventEmitter = require('events');
var util = require('util');
// var request = require('request');



function getHugeData() {
  var e = new EventEmitter;
  process.nextTick(function() {
    var count = 0;
    e.emit('start');
    var ps = setInterval(function() {
      e.emit('data', ++count);
      if (count >= 10) {
        e.emit('end');
        clearInterval(ps);
      }
    }, 100);
  });
  return e;
}

// var req = getHugeData();
//
// req.on('start', function() {
//   console.log('getting some data');
// });
//
// req.on('data', function(d) {
//   console.log('here is some data ->', d);
// });
//
// req.on('end', function() {
//   console.log('done!');
// });



function Person(name) {
  this.name = name;
  setTimeout(() => {
    this.emit('itch');
  }, 2000);
}

Person.prototype.scratch = function() {
  console.log(this.name, 'is scratching the itch.');
};

// Person.prototype.__proto__ = EventEmitter.prototype;
util.inherits(Person, EventEmitter);

var andy = new Person('Andy');
andy.on('itch', andy.scratch.bind(andy));



// request module without events
// request('https://www.google.com',
//   function(err, res, body) {
//     if (err) throw new Error(err);
//     console.log('Status code is:', res.statusCode);
//     console.log(body);
//   }
// );


// request module as a event emitter
// var req = request('https://www.google.com');
//
// req.on('response', function(res) {
//   console.log('Status code is:', res.statusCode);
// });
//
// req.data = '';
// req.on('data', function(d) {
//   console.log('getting data', d);
//   this.data += d;
// });
//
// req.on('end', function() {
//   console.log('done!');
//   console.log(this.data.length);
// });
//
// req.on('error', function(err) {
//   console.error(err);
// });


// node's process object is an event emitter
process.stdin.resume();
process.on('SIGINT', function() {
  console.log('Trying to kill me, eh? Press Control-D to exit.');
});
