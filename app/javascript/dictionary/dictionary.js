"use strict";

var	_ = require("lodash"),
	wordParts          = require("./word-parts"),
	words              = require("./words"),
	prefixes           = wordParts.filter(byType("prefix")),
	roots              = wordParts.filter(byType("root")),
	suffixes           = wordParts.filter(byType("suffix")),
	index 			   = {},
	idIndex			   = {},
	all                = [],
	pluck 			   = _.pluck;

function byType(type) {
	return function(part) {
		return part.type === type;
	};
}

function indexWord(word) {
	word.key = word.type + "-" + word.id;
	index[word.key] = word;
	idIndex[word.id] = word;
	all.push(word);
}

function resolveParts(parts) {
	return parts.map(function(part) {
		return idIndex[part];
	});
}

words.forEach(indexWord);
wordParts.forEach(indexWord);

words.forEach(function(word) {
	word.prefixes = resolveParts(word.prefixes);
	word.roots = resolveParts(word.roots);
	word.suffixes = resolveParts(word.suffixes);
	word.choosableParts = resolveParts(word.choosableParts);
});

module.exports = {
	parts:    wordParts,
	words:    words,

	prefixes: prefixes,
	roots:    roots,
	suffixes: suffixes,

	byType: function(type) {
		switch(type) {
			case "word":   return words;
			case "prefix": return prefixes;
			case "root":   return roots;
			case "suffix": return suffixes;
			default: 	   throw "Type not found in dictionary " + type;
		}
	},

	byPartCount: function(count) {
		return words.filter(function(word) {
			return (word.prefixes.length + 
					word.roots.length + 
					word.suffixes.length) === count;
		});
	},

	deserialize: function(key) {
		return index[key];
	}
};