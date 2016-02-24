var gulp = require('gulp'),
    nunjucks = require('gulp-nunjucks'),
    data = require('gulp-data'),
    rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('src/**/*.html.swig')
    .pipe(data(() => ({name: 'cccccs'})))
    .pipe(nunjucks.compile())
    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest('dist'))
});
