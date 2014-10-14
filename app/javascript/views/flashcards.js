"use strict";

var $ = require("jquery");

function Flashcards($outlet, deck) {
	var index = 0,
		showingAnswer = false,
		cards = deck.shuffle(),
		count = cards.length;

	function returnToMenu() {
		router("decks");
	}

	function progress() {
		if(showingAnswer) {
			index++;
			showingAnswer = false;
		}
		else {
			showingAnswer = true;
		}
		render();
	}

	function render() {
		var $el = $("<div class='flashcards'></div>"),
			$card = $("<div class='card'></div>"),
			$returnBtn = $("<button>Decks</button>"),
			card = cards[index];

		if(index >= count) {
			returnToMenu();
			return;
		}

		$card.html("").append(
			$("<p class='content'>"+(showingAnswer ? card.back : card.front)+"</p>")
		).on("click", progress);

		$el.html("").append(
			$card,
			$returnBtn
		);

		$outlet.html($el);
	}
	
	return {
		render: render
	};
}

module.exports = Flashcards;