"use strict";

var	_ 			       = require("lodash"),
	Q 				   = require("q"),
	wordParts          = require("./word-parts"),
	words              = require("./words"),
	soundManager	   = require("../sound/sound-manager"),
	prefixes           = wordParts.filter(byType("prefix")),
	roots              = wordParts.filter(byType("root")),
	suffixes           = wordParts.filter(byType("suffix")),
	index 			   = {},
	idIndex			   = {},
	all                = [],
	pluck 			   = _.pluck,
	wordSounds 		   = {};

var filePrefixes = {
	"prefix": "P",
	"root": "R",
	"suffix": "S",
	"word": "W"
};

function byType(type) {
	return function(part) {
		return part.type === type;
	};
}

function dot(key) {
	return function(obj) {
		return obj[key];
	};
}

function indexWord(word) {
	word.key = (word.type||"word") + "-" + word.id;
	index[word.key] = word;
	idIndex[word.id] = word;
	all.push(word);
}

function resolveParts(parts) {
	return parts.map(function(part) {
		return idIndex[part];
	});
}

function get(key) {
	var word = index[key];
	if(!word) {
		throw "Can't find word: " + key;
	}
	return word;
}

// returns an array of the wordparts contained by the word
function getParts(word) {
	return _.flatten([word.prefixes, word.roots, word.suffixes]);
}

function loadSounds(wordKey) {
	var word = get(wordKey),
		wordSound,
		definitionSound,
		prefix = filePrefixes[word.type];

	if(wordSounds[wordKey]) {
		return Q.resolve();
	}

	wordSound = soundManager.get("assets/audio/word-parts/"+word.type+"/"+prefix+"-"+word.id);

	if(word.type !== "word") {
		definitionSound = soundManager.get("assets/audio/definitions/"+word.type+"/"+"D"+prefix+"-"+word.id);
	}

	wordSounds[wordKey] = {
		word: wordSound,
		definition: definitionSound
	};

	return definitionSound ? Q.all([
		wordSound.load(), 
		definitionSound.load()
	]) : wordSound.load();
}

words.forEach(indexWord);
wordParts.forEach(indexWord);

wordParts
	.filter(dot("blacklist"))
	.forEach(function(wordPart) {
		wordPart.blacklist = resolveParts(wordPart.blacklist);
	});

words.forEach(function(word) {
	word.type 			= "word";
	word.prefixes       = resolveParts(word.prefixes);
	word.roots          = resolveParts(word.roots);
	word.suffixes       = resolveParts(word.suffixes);
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

	// Returns all words that contain the passed word
	// Argument is a word's key
	containing: function(key) {
		var toMatch = get(key);

		return words.filter(function(word) {
			return word.prefixes.indexOf(toMatch) !== -1 ||
				   word.roots.indexOf(toMatch)    !== -1 ||
				   word.suffixes.indexOf(toMatch) !== -1;
		});
	},

	// all parts that aren't part of the passed word
	notPartOf: function(word) {
		var parts = getParts(word);
		return wordParts.filter(function(part) {
			return parts.indexOf(part) === -1;
		});
	},

	playWord: function(wordKey, delay) {
		return soundManager.stop()
			.then(function() {
				return loadSounds(wordKey);
			})
			.then(function() {
				return wordSounds[wordKey].word.play(delay);
			});
	},

	playDefinition: function(wordKey, delay) {
		return soundManager.stop()
			.then(function() {
				return loadSounds(wordKey);
			})
			.then(function() {
				return wordSounds[wordKey].definition.play(delay);
			});
	},

	releaseSounds: function(wordKey) {
		var sounds = wordSounds[wordKey];

		if(sounds) {
			sounds.word.release();
			if(sounds.definition) {
				sounds.definition.release();
			}
			wordSounds[wordKey] = null;
		}
	},

	loadSounds: loadSounds,
	getParts: getParts,
	get: get
};