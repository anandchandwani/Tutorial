var fs = require('fs');
var request = require('request');

//
// process.stdin.resume();
// process.stdin.on('data', function(d) {
//   // console.log('getting some user input:', d.toString());
//   process.stdout.write('getting some user input: ' + d.toString());
// });


// process.stdin.pipe(process.stdout);

// reimplement the UNIX "cat" command
// fs.createReadStream('events.js').pipe(process.stdout);

// download an image from google
// var url = 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/642848-65eea9a4e5699f0b74ab44d434c94d2c-medium_jpg.jpg?buster=1438472045';
// request(url).pipe(fs.createWriteStream('codesmith.jpg'));


// chain requests between servers
request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'));
//
request
  .get('http://google.com/img.png')
  .on('response', function(response) {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']); // 'image/png'
  })
  .on('error', function(err) {
    console.error(err);
  })
  .pipe(request.put('http://mysite.com/img.png'));




// so what is gulp doing?
// gulp.task('sass', function () {
//   gulp.src('./sass/*.scss')
//     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//     .pipe(concat('style.css'))
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('./public/style/'));
// });



// how does one write their own stream?
// var thru = require('through2');
// var cap = thru(function(buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// });
//
// fs.createReadStream('events.js').pipe(cap).pipe(fs.createWriteStream('EVENTS.JS'));
