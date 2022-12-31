'use strict';

var options = require('../options');
var gulp = require('gulp');

module.exports = function () {
	return gulp.src(options.src.noop)
	.pipe(gulp.dest(options.build));
};