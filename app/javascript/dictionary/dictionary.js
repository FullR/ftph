var	WordCollection     = require("../collections/word-collection"),
	WordPartCollection = require("../collections/word-part-collection"),
	wordParts          = new WordPartCollection(require("./word-parts")),
	words              = new WordCollection(require("./words")),
	prefixes           = new WordPartCollection(wordParts.filter(byType("prefix"))),
	roots              = new WordPartCollection(wordParts.filter(byType("root"))),
	suffixes           = new WordPartCollection(wordParts.filter(byType("suffix")));

function byType(type) {
	return function(part) {
		return part.get("type") === type;
	};
}

var keyIndex = {};

wordParts.forEach(function(wordPart) {
	keyIndex[wordPart.get("key")] = wordPart;
});

words.forEach(function(word) {
	keyIndex[word.get("key")] = word;
});

module.exports = {
	parts: wordParts,
	words: words,
	prefixes: prefixes,
	roots: roots,
	suffixes: suffixes,
	byType: function(type) {
		switch(type) {
			case "word":   return words;
			case "prefix": return prefixes;
			case "root":   return roots;
			case "suffix": return suffixes;
			default: throw "Type not found in dictionary " + type;
		}
	},

	deserialize: function(key) {
		var part = keyIndex[key];

		if(!part) {
			throw "Failed to deserialized: " + key
		}

		return part;
	},

	serialize: function(part) {
		return part.get("key");
	}
};