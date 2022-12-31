'use strict';

var options = require('../options');
var del = require('del');

module.exports = function () {
	return del.sync([options.build + '/*'], {force: true});
};