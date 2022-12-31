'use strict';

var gulp = require('gulp');

/*tasks*/
gulp.task('clean', require('./tasks/clean'));
gulp.task('noop', require('./tasks/noop'));
gulp.task('html', require('./tasks/html'));
gulp.task('css', ['html'], require('./tasks/css'));
gulp.task('browserify', require('./tasks/js-browserify'));
gulp.task('concat', require('./tasks/js-concat'));

gulp.task('unCSS', require('./tasks/uncss'));
gulp.task('tidy', ['unCSS'], require('./tasks/tidy'));
gulp.task('minifyImages', ['tidy'], require('./tasks/minify-img'));
gulp.task('minifyCSS', ['tidy'], require('./tasks/minify-css'));
gulp.task('minifyHTML', ['tidy'], require('./tasks/minify-html'));
gulp.task('minifyJS', ['tidy'], require('./tasks/minify-js'));

/*groups*/
gulp.task('js', ['browserify', 'concat']);
gulp.task('minify', ['unCSS', 'tidy', 'minifyImages', 'minifyCSS', 'minifyJS', 'minifyHTML']);
gulp.task('build', ['clean', 'noop', 'html', 'css', 'js']);
gulp.task('default', ['watch']);

/*browsersync + watch*/
var browsersync = require('./tasks/browsersync');
gulp.task('browsersync', ['build'], browsersync.init);
gulp.task('reload', ['build'], browsersync.reload);
gulp.task('watch', ['browsersync'], require('./tasks/watch'));