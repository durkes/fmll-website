'use strict';

var options = require('../options');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var on_error = require('./on-error');

module.exports = function () {
	return gulp.src(options.src.css)
	.pipe(sass({errLogToConsole: true, precision: 8}))
	.on('error', on_error)

	/*https://github.com/ai/browserslist*/
	.pipe(autoprefixer({browsers: ['> 0%'], remove: false}))
	.pipe(gulp.dest(options.dest.css));
};