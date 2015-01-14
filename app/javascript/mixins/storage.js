"use strict";

var _ = require("lodash"),
	store = require("storage");

module.exports = function(namespace) {
	return {
		// Returns the current data in the store (defaults to an empty object)
		getStore: function() {
			return store.get(namespace) || {};
		},

		// merges an object over the current store
		mergeStore: function(source) {
			store.set(namespace, _.extend(this.getStore(), source));
		}
	};
};