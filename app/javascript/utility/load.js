"use strict";

var history = require("backbone").history;

module.exports = function(loadFn) {
	var returnRoute = history.fragment;
	history.navigate("loading", {trigger: true});
	
	loadFn(function() {
		history.navigate(returnRoute, {trigger: true, replace: true});
	});
};