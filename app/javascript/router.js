"use strict";

var $ = require("jquery"),
	$outlet = $(".outlet"),
	Decks = require("./views/decks"),
	Flashcards = require("./views/flashcards"),
	NewDeck = require("./views/new-deck");

var routes = {
	"decks": Decks,
	"flashcards": Flashcards,
	"new-deck": NewDeck
};

var slice = [].slice;

function router(name) {
	var args = slice.call(arguments, 1),
		route = routes[name];
	args.unshift($outlet);
	if(route) {
		$outlet.html(route.apply(null, args).render());
	}
	else {
		throw {error: "Undefined route " + name};
	}
}

module.exports = router;