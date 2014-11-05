"use strict";

var partIndex = require("../dictionary/word-part-index");

var Word = Backbone.Model.extend({
	initialize: function() {
		this.resolveParts();
		this.set("key", "word-"+this.get("id"));
	},

	resolveParts: function(partsIndex) {
		function resolveArray(arr, type) {
			return arr.map(function(part) {
				return partIndex.get(part, type);
			});
		}

		var prefixes       = resolveArray(this.get("prefixes"), "prefix"),
			roots          = resolveArray(this.get("roots"), "root"),
			suffixes       = resolveArray(this.get("suffixes"), "suffix"),
			choosableParts = resolveArray(this.get("choosableParts"), "any"),
			parts          = require("lodash").flatten([prefixes, roots, suffixes]);

		this.set({
			parts: parts,
			prefixes: prefixes,
			roots: roots,
			suffixes: suffixes,
			choosableParts: choosableParts
		});
	}
});

module.exports = Word;