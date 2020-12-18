const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const pug = require('gulp-pug');


function sassCompilation() {
  return gulp
    .src('styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/'))
}

function gulpJs() {
  return gulp
    .src('js/*.js')
    .pipe(concat('Hummel-pdp.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
}

function pugCompilation() {
  return gulp
    .src('views/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
}

function gulpWatch() {
  gulp.watch('styles/**/*.scss', sassCompilation)
  gulp.watch('js/**/*.js', gulpJs)
  gulp.watch('views/**/*.pug', pugCompilation)
}

exports.pugCompilation = pugCompilation
exports.sassCompilation = sassCompilation;
exports.gulpJs = gulpJs;
exports.gulpWatch = gulpWatch;

exports.default = gulp.parallel(gulpWatch, sassCompilation, gulpJs, pugCompilation);

exports.build = gulp.parallel(sassCompilation, gulpJs, pugCompilation);