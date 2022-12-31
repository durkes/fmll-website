'use strict';

var options = require('../options');
var gulp = require('gulp');
var fileInclude = require('gulp-file-include');
var on_error = require('./on-error');

module.exports = function () {
	return gulp.src(options.src.html)
	.pipe(fileInclude({prefix: '@@', basepath: '@file'}))
	.on('error', on_error)
	.pipe(gulp.dest(options.dest.html));
};