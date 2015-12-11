var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('age-6',function(){
  return browserify({entries: 'client/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('client/'));
});
