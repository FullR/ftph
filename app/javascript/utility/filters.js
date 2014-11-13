"use strict";

var _ = require("lodash");

function curry2(fn) {
	return function(a) {
		return function(b) {
			return fn(a, b);
		};
	};
}

function and(/*...filters*/) {
	var filters = slice.call(arguments);
	return function(v) {
		return filters.reduce(function(passes, filter) {
			return passes && filter(v);
		}, true);
	};
}

module.exports = {};