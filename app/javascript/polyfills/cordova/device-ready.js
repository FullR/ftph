"use strict";

var Q = require("q");

var ready;

if (window.__platform.isCordova) {
	ready = Q.Promise(function(resolve) {
		document.addEventListener("deviceready", resolve, false);
	});
} else {
	ready = Q.resolve();
}

module.exports = ready;