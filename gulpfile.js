var gulp = require('gulp'),
    nunjucks = require('gulp-nunjucks'),
    data = require('gulp-data');

gulp.task('default', function() {
  gulp.src('src/**/*.html.swig')
    .pipe(data(() => ({name: 'cccccs'})))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('dist'))
});
