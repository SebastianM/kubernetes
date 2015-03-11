'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('babel', function () {
  return browserify({ debug: true })
      .add('./' + paths.src + '/app/main.js')
      .transform(babelify)
      .bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(paths.tmp + '/serve/app'))
      .pipe(browserSync.reload({ stream: true }))
      .pipe($.size());
});