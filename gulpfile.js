const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pug = require('gulp-pug');


function sassCompilation() {
  return gulp
  .src('styles/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('build/'))
}

function gulpJs() {
  return gulp
  .src('js/home/*.js')
  .pipe(concat('Hummel-pdp.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
}

function pugCompilation(){
  return gulp
  .src('views/*.pug')
  .pipe(pug(
    gulp.dest('build/')
  ))
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