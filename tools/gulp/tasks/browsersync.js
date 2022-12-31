'use strict';

var options = require('../options');
var url = require('url'); /*internal*/
var path = require('path'); /*internal*/
var browserSync = require('browser-sync').create();

exports.init = function () {
	browserSync.init({
		server: {
			baseDir: options.build,
			middleware: router
		},
		ghostMode: {
			forms: false
		}
	});
};

exports.reload = function () {
	browserSync.reload();
};

var html_path = options.server_html; /*relative path*/
function router(request, response, next) {
	var url_parts = url.parse(request.url, false, false);
	var path_parts = path.parse(url_parts.pathname);

	if (!path_parts.name) path_parts.name = 'index';
	if (!path_parts.ext) path_parts.ext = '.html';
	if (path_parts.ext === '.html') request.url = '/' + html_path + path_parts.dir + '/' + path_parts.name + path_parts.ext + (url_parts.search || '');

	/*request.url = request.url.replace(/\/[^\/\?]+(?=\?|$)/, function (file) {if (file.match(/\./)) return file; return 'html/' + file + '.html';});*/
	next();
}