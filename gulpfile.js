var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
// var tinypng = require('gulp-tinypng-compress');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

function js() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  
}
function html() {
  return gulp.src('./src/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
}

function css() {
  return gulp.src('./src/css/*.css')
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

function img() {
    return gulp.src('./src/img/**/*{png,jpg,jpeg,mp4}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

gulp.task('js', js);
gulp.task('html', html);
gulp.task('css', css);
gulp.task('fonts', fonts);
gulp.task('php', php);
gulp.task('img', img);
gulp.task('build', gulp.series(gulp.parallel(js, html, css, fonts, php, img)));