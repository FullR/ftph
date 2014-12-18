"use strict";

var React	 = require("react"),
	ready    = require("./polyfills/cordova/device-ready"),
	project  = require("../project"),
	Backbone = require("backbone"),
	$        = require("jquery");

Backbone.$ = $;

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

		require("router/router");
	} catch(e) {
		return require("q").reject(e); // Q keeps errors from being thrown within promise callbacks
	}
}).done();