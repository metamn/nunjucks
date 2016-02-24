var gulp = require('gulp'),
    nunjucks = require('gulp-nunjucks'),
    data = require('gulp-data'),
    rename = require('gulp-rename'),
    fs = require('fs');



var getJSONData = function(file) {
  // home/work/cs/c/pages/home/home.html.swig -> home/work/cs/c/pages/home/home
  var split = file.path.split('.');
  if (split[0]) {
    var json = split[0] + '.json';
    try {
      var stats = fs.lstatSync(json);
      if (stats.isFile()) {
        json = require(json);
        console.log(json);
        return json;
      }
    } catch(e) {
      //
    }
  }
}

gulp.task('default', function() {
  gulp.src('src/**/*.html.swig')
    .pipe(data(getJSONData))
    .pipe(nunjucks.compile())
    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest('dist'))
});
