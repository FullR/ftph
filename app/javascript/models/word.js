"use strict";

var _ = require("lodash");

function Word(options) {
	_.extend(this, options);
	this.type = "word";
	this.key = this.type + "-" + this.id;
}

_.extend(Word.prototype, {
	serialize: function() {
		return this.key;
	}
});

// word model
module.exports = Word;