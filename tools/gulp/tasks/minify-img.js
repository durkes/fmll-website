'use strict';

var options = require('../options');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = function () {
	return gulp.src(options.build + '/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest(options.build));
};