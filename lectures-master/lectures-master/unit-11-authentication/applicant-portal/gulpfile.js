var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');


function handleErrors() {
  notify.onError({
    title : 'Compile Error',
    message : '<%= error.message %>'
  }).apply(this, arguments);

  this.emit('end'); //keeps gulp from hanging on this task
}

gulp.task('browserify', scripts)
    .task('serve', serve);

function scripts() {
  var bundler = browserify({
    entries: ['./js/main.jsx'],
    extensions: ['.jsx'],
    transform: [
      ['babelify', { blacklist: 'strict' }],
    ],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  bundler.transform({
    global: true
  }, 'uglifyify');
  var watcher = watchify(bundler);

  return watcher
    .on('update', function() {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./public/js/'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    // Create the initial bundle when starting the task
    .bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
}

function serve() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['js/', 'tokens/', 'test/', 'sass/', 'keys/']
  })
  .on('restart', () => console.log('restarting server'));
}

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./public/style/'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['browserify', 'serve', 'sass', 'sass:watch']);