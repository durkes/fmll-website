'use strict';

var options = require('../options');
var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function () {
	return gulp.src(options.src.js_concat)
	.pipe(concat(options.js_concat_filename))
	.pipe(gulp.dest(options.dest.js_concat));
};