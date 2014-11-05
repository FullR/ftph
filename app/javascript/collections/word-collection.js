"use strict";

var Word = require("../models/word"),
	WordPartCollection = require("./word-part-collection");

var WordCollection = Backbone.Collection.extend({
	model: Word,

	withPart: function(part) {
		return this.filter(function(word) {
			return word.get("parts").indexOf(part) !== -1;
		});
	}
});

module.exports = WordCollection;