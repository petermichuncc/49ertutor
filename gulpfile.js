var gulp = require('gulp'), 
  angularBuilder = require('boilerplate-gulp-angular');
 /*gulp.task('default', function(){




 })*/
angularBuilder(gulp, {
  jsMain: 'app/scripts/app.js',
  cssMain: 'styles/main.scss'
});