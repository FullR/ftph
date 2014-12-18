"use strict";

var Q 	  = require("q"),
	Bacon = require("baconjs"),
	_     = require("lodash"),
	slice = [].slice;

/*
	states:
		sitting
		speaking
		speaking-closed
*/

function Actor(options) {
	this.centered = false;
	this.state    = "sitting";
	this.hidden   = true;
	this.stream   = new Bacon.Bus();
	_.extend(this, options);
	_.bindAll(this);
}

_.extend(Actor.prototype, {
	then: require("utility/then"),
	set: require("utility/set"),

	hide: function() {
		this.set("hidden", true);
	},

	reveal: function() {
		this.set("hidden", false);
	},

	center: function() {
		this.set("centered", true);
	},

	uncenter: function() {
		this.set("centered", false);
	},

	setState: function(state) {
		this.set("state", state);
	},

	say: function(fn) {
		return Q.resolve()
			.then(this.setState.bind(this, "speaking"))
			.then(fn)
			.then(this.setState.bind(this, "speaking-closed"));
	},

	update: function() {
		this.stream.push(this);
	}
});

module.exports = Actor;