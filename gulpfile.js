var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var del = require('del');

var path = {
  css: './src/**/*.css',
  js: './src/**/*.js',
  build: './build/',
};

function clean() {
  return del([ path.build ]);
}

function styles() {
  return gulp.src(path.css)
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(path.build));
}

function scripts() {
  return gulp.src(path.js)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(path.build));
}

exports.default = gulp.series(clean, gulp.parallel(styles, scripts));
