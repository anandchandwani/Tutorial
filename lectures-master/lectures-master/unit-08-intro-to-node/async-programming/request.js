var request = require('request');

function getGoogleHomePage() {
  var result = request.get('https://www.google.com');
  return result;
}

console.log(getGoogleHomePage());



// function getGoogleHomePage(done) {
//   request.get('https://www.google.com', function(err, resp, body) {
//     if (err) {
//       done(err);
//     } else {
//       done(null, body);
//     }
//   });
// }
//
// getGoogleHomePage(function(err, body) {
//   console.log(body);
// });


// var Promise = require('bluebird');
//
// function getGoogleHomePage() {
//   var googlePromise = new Promise(function(resolve, reject) {
//     request.get('https://www.google.com', function(err, resp, body) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(body);
//       }
//     });
//   });
//   return googlePromise;
// }
//
// var req = getGoogleHomePage();
// req.then(function(body) {
//   console.log(body);
// });
