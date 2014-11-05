"use strict";

var $ = require("jquery"),
	Backbone = require("backbone"),
	model,
	Application;

Backbone.$ = $;
window.$ = $;
window._ = require("underscore");
window.Backbone = Backbone;
window.React = require("react");
window.component = require("omniscient");
window.noop = function() {};

window.maybeInit = function(instance, Clas) {
	return instance instanceof Clas ? instance : new Clas(instance);
};

function mountComponent(component) {
	React.render(component(), $(".outlet").get(0));
}
model = require("./storage");
Application = require("./components/application.jsx");

mountComponent(Application);