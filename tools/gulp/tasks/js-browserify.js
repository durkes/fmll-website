'use strict';

var options = require('../options');
var path = require('path'); /*internal*/
var gulp = require('gulp');
var browserify = require('browserify');
var through = require('through2');
var collapse = require('bundle-collapser/plugin');
var stream = require('vinyl-source-stream');

module.exports = function () {
	return gulp.src(options.src.js_browserify)
	.pipe(bundler())
	.pipe(gulp.dest(options.dest.js_browserify));
};

function bundler() {
	return through.obj(function (file, enc, callback) {
		var _this = this;

		browserify(file.path)
		.plugin(collapse)
		.bundle()
		.on('error', callback)
		.pipe(stream(path.basename(file.path))) /*give stream a file object*/
		.on('data', function (chunk) {
			_this.push(chunk);
		})
		.on('end', callback);
	});
}