"use strict";

var Bacon = require("baconjs");

module.exports = function() {
	var actionBus = new Bacon.Bus();
	function actionFn(payload) {
		actionBus.push(payload);
	};

	actionFn.stream = actionBus;

	return actionFn;
};