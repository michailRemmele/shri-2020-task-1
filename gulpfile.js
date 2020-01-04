const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const argv = require('yargs').argv;

const path = {
  css: './src/**/*.css',
  js: './src/**/*.js',
  build: './build/',
  watch: './build/**',
};

const dest = argv.dest ? argv.dest : path.build;

function styles() {
  return gulp.src(path.css)
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(dest));
}

function scripts() {
  return gulp.src(path.js)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(dest));
}

function watch() {
  gulp.watch(path.css, styles);
  gulp.watch(path.js, scripts);
}

exports.build = gulp.parallel(styles, scripts);
exports.default = gulp.series(gulp.parallel(styles, scripts), watch);
