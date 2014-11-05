"use strict";

var User = require("./user");

module.exports = require("backbone").Model.extend({
	defaults: {
		users: []
	},

	initialize: function() {
		var users = this.get("users").map(function(user) {
			return maybeInit(user, User);
		});

		this.set("users", users);
	},

	serialize: function() {
		return {
			users: _.invoke(this.get("users"), "serialize")
		};
	}
});