var gulp = require('gulp'), 
  angularBuilder = require('boilerplate-gulp-angular');
 
angularBuilder(gulp, {
  jsMain: 'app/scripts/app.js',
  cssMain: 'styles/main.scss'
});