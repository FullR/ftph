"use strict";

var Q = require("q"),
	_ = require("lodash"),
	soundManager = require("sound/sound-manager"),
	PromiseQueue = require("utility/promise-queue"),
	slice = [].slice,
	noop = _.noop;

function resolveHash(promiseHash) {
	var keys = _.keys(promiseHash),
		values = _.values(promiseHash);

	return Q.all(values).then(function(resolvedValues) {
		return _.zipObject(keys, resolvedValues);
	});
}

function choiceInvoker(fnName) {
	return function(indexes) {
		return _.invoke(this.resolveChoices(indexes), fnName);
	};
}

module.exports = require("./utility").extend({
	"choices-only": {
		animation: function(then) {
			return [
				then("hideChoices"),
				then("setupActor"),
				then("uncenterActor"),
				this.actorSayChoices(),
				then("sit")
			];
		}
	},

	then: function(fnName /*, ...args*/) {
		var args = slice.call(arguments, 1);
		return function() {
			if(typeof fnName === "string") {
				return this[fnName].apply(this, args);
			}
			else {
				return fnName.apply(null, args);
			}
		}.bind(this);
	},

	revealActor: function() {
		this.state.actor.reveal();
	},

	hideActor: function() {
		this.state.actor.hide();
	},

	uncenterActor: function() {
		this.state.actor.uncenter();
	},

	centerActor: function() {
		this.state.actor.center();
	},

	setupActor: function() {
		this.state.actor.set({
			hidden: false,
			centered: true
		});
	},

	sit: function() {
		this.state.actor.setState("sitting");
	},

	actorSay: function(sound, delay) {
		var actor = this.state.actor;
		actor.setState("speaking");
		return this.play(sound, delay).then(function() {
			actor.setState("speaking-closed");
		});
	},

	play: function(sound, delay) {
		if(typeof sound === "object") {
			return sound.play(delay);
		}
		else {
			return sound.split(".").reduce(function(obj, key) {
				if(typeof obj !== "object") {
					throw "Invalid sub-key " + key + " in " + sound;
				}
				return obj[key];
			}, this.state).play(delay);
		}
	},

	actorSayChoice: function(index) {
		return [
			this.then("call", "choices."+index+".reveal"),
			this.then("actorSay", "choices."+index),
			this.then("wait", 250),
		];
	},

	actorSayChoices: function(indexes) {
		return indexes ? indexes.map(this.actorSayChoice) : this.state.choices.map(function(c, i) {
			return this.actorSayChoice(i);
		}.bind(this));
	},

	resolveChoices: function(indexes) {
		return indexes ? indexes.map(function(index) {
			return this.state.choices[index];
		}.bind(this)) : this.state.choices;
	},

	detachChoice: function(index) {
		this.choices[index].detach();
	},

	attachChoice: function(index) {
		this.choices[index].attach();
	},

	hideChoice: function(index) {
		this.choices[index].hide();
	},

	revealChoice: function(index) {
		this.choices[index].reveal();
	},

	detachChoices: choiceInvoker("detach"),
	attachChoices: choiceInvoker("attach"),
	hideChoices:   choiceInvoker("hide"),
	revealChoices: choiceInvoker("reveal"),

	call: function(_key) {
		var args = slice.call(arguments, 1);
		return _key.split(".").reduce(function(obj, key) {
			var value = obj[key];
			if(typeof obj !== "object") {
				throw "Invalid sub-key " + key + " in " + _key;
			}
			return value;
		}, this.state).apply(null, args);
	},

	wait: function(ms) {
		return Q.promise(function(resolve) {
			setTimeout(resolve, ms);
		});
	},

	animate: function(animationName) {
		var animation = this[animationName];
		var _animate = function() {
			this.animationQueue = PromiseQueue(animation.animation.call(this, this.then));

			if(animation.preAnimation) {
				animation.preAnimation.call(this);
			}

			return this.animationQueue.start().then(function() {
				soundManager.stop();
				this.animationQueue = null;

				if(animation.postAnimation) {
					animation.postAnimation.call(this);
				}

			}.bind(this));
		}.bind(this);

		if(this.animationQueue) {
			this.animationQueue.getPromise()
				.then(_animate);

			this.stop();
		}
		else {
			_animate();
		}
	},

	isAnimating: function() {
		return !!this.animationQueue;
	},

	stop: function() {
		if(this.animationQueue) {
			this.animationQueue.stop();
		}
		this.animationQueue = null;
	},

	sound: function(path) {
		return soundManager.get(path);
	},

	componentDidMount: function() {
		Q.resolve()
			.then(this.load)
			.then(this.animate.bind(this, this.defaultAnimation || "instructions"));
	},

	componentWillUnmount: function() {
		this.stop();
	}
});