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

	hide() {
		this.set("hidden", true);
	},

	reveal() {
		this.set("hidden", false);
	},

	center() {
		this.set("centered", true);
	},

	uncenter() {
		this.set("centered", false);
	},

	setState(state) {
		this.set("state", state);
	},

	say(fn) {
		return Q.resolve()
			.then(this.setState.bind(this, "speaking"))
			.then(fn)
			.then(this.setState.bind(this, "speaking-closed"));
	},

	update() {
		this.stream.push(this);
	}
});

module.exports = Actor;