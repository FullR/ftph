"use strict";

var ready = require("./polyfills/cordova/device-ready");

require("backbone").$ = require("jquery");

ready.then(function afterReady() {
	try {
		//Function.prototype.bind polyfill for cordova
		require("./polyfills/function-prototype-bind")();

		// Cordova media polyfill
		require("./polyfills/cordova/cordova-media-plugin")();

		// start the router
		require("./router").start();
	} catch(e) {
		return require("q").reject(e); // Q keeps errors from being thrown within promise callbacks
	}
}).done();