var gulp = require('gulp'), 
  angularBuilder = require('boilerplate-gulp-angular');
 /*gulp.task('default', function(){




 })*/
angularBuilder(gulp, {
  jsMain: 'app/scripts/app.js',
  cssMain: 'styles/main.scss'
});

/*angular.module('material.components.slider', [
  'material.core'
]);*/

'use strict';
 
'use strict';
 

var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/styles/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/styles/main.scss', ['sass']);
});