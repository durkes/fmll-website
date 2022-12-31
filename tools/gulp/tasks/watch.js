'use strict';

var options = require('../options');
var gulp = require('gulp');

module.exports = function () {
	var watcher = gulp.watch(options.source + '/**/*', ['reload']);

	watcher.on('change', function (event) {
		console.log('\nFile ' + event.path + ' was ' + event.type + ', running tasks...');
	});
};