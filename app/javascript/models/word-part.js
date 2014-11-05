"use strict";

var WordPart = Backbone.Model.extend({
	initialize: function() {
		this.set({
			key: this.get("type")+"-"+this.get("id")
		});
	}
});

module.exports = WordPart;