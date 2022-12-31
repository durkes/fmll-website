'use strict';

var options = require('../options');
var gulp = require('gulp');
var uncss = require('gulp-uncss');

module.exports = function () {
	return gulp.src(options.build + '/**/*.css')
	.pipe(uncss({html: [options.build + '/**/*.html']}))
	.pipe(gulp.dest(options.build));
};