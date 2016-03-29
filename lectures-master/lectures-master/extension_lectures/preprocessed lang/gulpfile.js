var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffeeify');

gulp.task('default', ['sass', 'scripts', 'watch']);

gulp.task('sass', function() {
  gulp.src('./src/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dest/'));
});

gulp.task('scripts', function() {
  gulp.src('./src/*.coffee')
  .pipe(coffee())
  .pipe(gulp.dest('./dest/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.coffee', ['scripts']);
  gulp.watch('./src/style.scss', ['sass']);
});