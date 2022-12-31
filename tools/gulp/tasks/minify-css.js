'use strict';

var options = require('../options');
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

module.exports = function () {
	return gulp.src(options.build + '/**/*.css')
	.pipe(minifyCSS({keepSpecialComments: 0}))
	.pipe(gulp.dest(options.build));
};