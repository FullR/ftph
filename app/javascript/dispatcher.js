"use strict";

var _         = require("lodash"),
	slice     = [].slice,
	listeners = [],
	store     = require("./store");

var controllers = require("./controllers");

/*
	Listens for and reacts to actions emitted with `#send` and `#sendMultiple`
*/
var dispatcher = {
	// Takes an action id and any arguments
	// passes the arguments to the action's callback
	send: function(actionId /*, ...args*/) {
		var args = slice.call(arguments, 1),
			action = this.actions[actionId];

		if(!action) {
			throw "Action not found " + actionId;
		}

		action.apply(this, args);
		this.notify();
	},

	// accepts a hash of actions using the format actionId: [args...]
	// After all actions have been handled, listeners are notified
	sendMultiple: function(actions) {
		_.each(actions, function(args, actionId) {
			var action = this.actions[actionId];

			if(!action) {
				throw "Action not found " + actionId;
			}

			action.apply(this, args);
		}.bind(this));
		this.notify();
	},

	// callback gets called after any action is dispatched
	listen: function(callback) {
		listeners.push(callback);
	},

	// notifies all listeners and saves the store state
	notify: function() {
		listeners.forEach(function(callback) {
			callback();
		});
		// any state change should be saved
		store.save();
	},

	actions: {
		select: function(attempt, choice) {
			controllers[attempt.attemptType].select(attempt, choice);
		},

		// after continue button is pressed, cycle choices, example words, etc.
		continueAttempt: function(attempt) {
			if(attempt.unused.length > 0) {
				controllers[attempt.attemptType].progress(attempt);
			}
		},

		replay: function(activity, review) {
			// if its a review, we will refer to the last attempt otherwise the first attempt since it will never be a review
			var attempt = review ? activity.attempts[activity.attempts.length-1] : activity.attempts[0],
				newAttempt,
				unused;

			if(review) {
				// only incorrect choices
				unused = attempt.used.filter(function(choice) {
					return !choice.correct;
				});
			}
			else {
				unused = attempt.used;
			}

			// get the words and shuffle them for reuse
			unused = _.shuffle(_.pluck(unused, "word"));

			newAttempt = {
				review: review,
				used: [],
				unused: unused,
				wordType: attempt.wordType,
				attemptType: attempt.attemptType
			};

			controllers[attempt.attemptType].progress(newAttempt);

			activity.attempts.push(newAttempt);
		},

		setUser: function(name) {
			store.getModel().user = name;
		},

		clearData: function() {
			store.reset();
		}
	}
};

module.exports = dispatcher;