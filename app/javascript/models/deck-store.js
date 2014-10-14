"use strict";

var Deck = require("./deck"),
	namespace = "james-meyers.flashcards-app";

var decks = [
	Deck("foo", [
		{front: "foo front 1", back: "foo back 1"},
		{front: "foo front 2", back: "foo back 2"},
		{front: "foo front 3", back: "foo back 3"},
		{front: "foo front 4", back: "foo back 4"},
		{front: "foo front 5", back: "foo back 5"}
	]),
	Deck("bar", [
		{front: "bar front 1", back: "bar back 1"},
		{front: "bar front 2", back: "bar back 2"},
		{front: "bar front 3", back: "bar back 3"},
		{front: "bar front 4", back: "bar back 4"},
		{front: "bar front 5", back: "bar back 5"}
	])
];

var storage = store.get(namespace);

if(!storage) {
	storage = {
		decks: []
	};
	save();
}

function save() {
	store.set(namespace, storage);
}

module.exports = {
	decks: storage.decks,
	save: function() {}
};