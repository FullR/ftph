"use strict";

var React       = require("react"),
	Application = require("./components/application.jsx"),
	dispatcher  = require("./dispatcher"),
	store       = require("./store");

function mountComponent(component) {
	var model = store.getModel();
	React.render(component({model: model}), document.getElementById("outlet"));
}

dispatcher.listen(function() {
	mountComponent(Application);
});

mountComponent(Application);