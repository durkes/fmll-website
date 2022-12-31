'use strict';

var options = require('../options');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function () {
	return gulp.src(options.build + '/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest(options.build));
};