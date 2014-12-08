"use strict";

var $ = require("jquery"),
	ready = require("./polyfills/cordova/device-ready"),
	project = require("../project");

require("backbone").$ = $;

ready.then(function afterReady() {
	try {
		//Function.prototype.bind polyfill for cordova
		require("./polyfills/function-prototype-bind")();

		// Cordova media polyfill
		require("./polyfills/cordova/cordova-media-plugin")();

		if(window.__platform.name === "web") {
			// hover seems to be broken on android
			$("body").addClass("hover-enabled");
			// set title
			$("title").html(project.title);
		}

		// start the router and render current route
		require("./router").start();
	} catch(e) {
		return require("q").reject(e); // Q keeps errors from being thrown within promise callbacks
	}
}).done();