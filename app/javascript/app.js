"use strict";

var $ = require("jquery"),
	bb = require("backbone"),
	Deck = require("./models/deck"),
	decks = [

	];
window.router = require("./router");

bb.$ = $;


router("decks", decks);