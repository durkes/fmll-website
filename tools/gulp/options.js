'use strict';

var path = require('path');

var options = {};
options.src = {};
options.dest = {};

options.source = '../../source';
options.build = '../../build';

options.src.noop = path.join(options.source, '/noop/**');

options.src.html = path.join(options.source, '/*.html');
options.dest.html = options.build;

options.src.css = path.join(options.source, '/css/**/*.+(css|scss)');
options.dest.css = path.join(options.build, '/css');

options.src.js_browserify = path.join(options.source, '/js/*.js');
options.dest.js_browserify = path.join(options.build, '/js');

options.src.js_concat = path.join(options.source, '/js/_concat/*.js');
options.dest.js_concat = path.join(options.build, '/js');
options.js_concat_filename = 'bundle.js';

options.src.tidy = path.join(options.build, '/**/_*');
options.server_html = '';

module.exports = options;