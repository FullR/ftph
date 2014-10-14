"use strict";

var $ = require("jquery"),
	decks = require("../models/deck-store").decks;

function Decks($outlet) {
	decks = decks || [];

	function newDeck() {
		router("new-deck");
	}

	function editDeck(deck) {
		router("new-deck", deck);
	}

	function play(deck) {
		router("flashcards", deck);
	}

	return {
		render: function() {
			var $el = $("<div class='decks'></div>"),
				$decks = $("<ul class='deck-list'></ul>"),
				$newDeckButton = $("<button class='new-deck-btn'>New Deck</button>");

			$el.append(
				$decks.append(
					decks.map(function(deck) {
						return $("<li></li>").append(
							$("<div class='deck'></div>")
								.append(
									"<p>"+deck.name+"</p>",
									$("<button>Edit</button>").on("click", editDeck.bind(null, deck)),
									$("<button>Play</button>").on("click", play.bind(null, deck))
								)
						);
					})
				),
				$newDeckButton.on("click", newDeck)
			);

			$outlet.html($el);
		}
	};
}

module.exports = Decks;