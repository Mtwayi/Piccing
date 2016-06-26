'use strict';
 
var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create(),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifycss       = require('gulp-minify-css'),
    rename          = require('gulp-rename');

gulp.task('sass', function() {
  return sass('sass', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())  
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init(["sass/*.sass", "css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'watch', 'browser-sync'], function() {

});