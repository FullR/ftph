"use strict";

var _ = require("lodash");

function WordPart(options) {
	_.extend(this, options);
	this.key = this.type + "-" + this.id;
}

_.extend(WordPart.prototype, {
	serialize: function() {
		return this.key;
	}
});

module.exports = WordPart;