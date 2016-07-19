var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util');

gulp.task('sass', function () {
  gulp.src('css/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('main.css'))
    .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('css/partials/*', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

