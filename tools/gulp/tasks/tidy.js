'use strict';

var options = require('../options');
var del = require('del');

/*remove files and folders that begin with _*/
module.exports = function () {
	return del.sync([options.src.tidy], {force: true});
};