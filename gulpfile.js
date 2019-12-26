var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var cssFiles = [
  './src/css/style.css',
  './src/css/jquery.fancybox.min.css'
];
var imagemin = require('gulp-imagemin');

gulp.task('img', function () {
  gulp.src('./src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));
});

exports.default = () => (
  gulp.src('./src/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
);

function html() {
  return gulp.src('./src/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
}

function css() {
  return gulp.src(cssFiles)        
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('dist/css/'));
}

function fonts() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
}

function php() {
    return gulp.src('./src/**/*.php')
        .pipe(gulp.dest('dist'));
}

// gulp.task('img', function() {
//     return gulp.src('./src/img/**/*{png,jpg,jpeg,}')
//         .pipe(tinypng({key: 'kBVKg7NGsbWgD61CZLRfLkFy2XPRdj4q'}))
//         .pipe(gulp.dest('dist/img'));
// });

function js() {
  return gulp.src('./src/js/*.js')
      
      .pipe(gulp.dest('dist/js'));
}
gulp.task('js', js);
gulp.task('html', html);
gulp.task('css', css);
gulp.task('fonts', fonts);
gulp.task('php', php);
// gulp.task('img', img);
// gulp.task('build', gulp.series(gulp.parallel(js, html, css, fonts, php, img)));