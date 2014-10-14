"use strict";

var decks = require("../models/deck-store").decks,
	Deck = require("../models/deck"),
	$ = require("jquery");

function NewDeck($outlet, oldDeck) {
	var $nameInput = $("<input type='text' placeholder='name'>"),
		$el = $("<div class='new-deck'></div>"),
		$cards = $("<ul class='cards'></ul>"),
		$newCardForm = $("<form></form>"),
		$frontInput = $("<input type='text' placeholder='front'>"),
		$backInput = $("<input type='text' placeholder='back'>"),
		$addCardBtn = $("<button>Add</button>"),
		$submitBtn = $("<button>Done</button>"),
		$cancelBtn = $("<button>Discard</button>"),
		deck,
		cards;

	deck = oldDeck ? Deck(oldDeck.name, oldDeck.cards.slice()) : Deck("", []);
	cards = deck.cards;

	function updateSubmitBtn() {
		if(cards.length > 0) {
			$submitBtn.removeAttr("disabled");
		}
		else {
			$submitBtn.attr("disabled", true);
		}
	}

	function addCard() {
		var front = ($frontInput.val()||"").trim(),
			back = ($backInput.val()||"").trim();

		if(front.length > 0 && back.length > 0) {
			cards.push({
				front: front,
				back: back
			});
			console.log(cards);
		}
		render();
	}

	function removeCard(card) {
		cards.splice(cards.indexOf(card), 1);
		render();
	}

	function submit() {
		if(oldDeck) {
			oldDeck.setName($nameInput.val());
			oldDeck.setCards(deck.cards);
			router("decks");
		}
		else {
			deck.setName($nameInput.val());
			decks.push(deck);
			router("decks");
		}
	}

	function discard() {
		router("decks");
	}

	function render() {
		$el.html("").append(
			$nameInput.val(deck.name),
			$cards.html("").append(
				cards.map(function(card) {
					return $("<li></li>").append(
						$("<div class='card'></div>")
							.append(
								"<div class='front'>"+card.front+"</div>",
								"<div class='back'>"+card.back+"</div>",
								$("<button>Remove</button>").on("click", function() {
									removeCard(card);
								})
							)
						);
				})
			),
			$newCardForm.html("")
				.append(
					$frontInput,
					$backInput,
					$addCardBtn.on("click", addCard)
				)
				.on("submit", function(event) {
					event.preventDefault();
				}),
			$submitBtn.on("click", submit),
			$cancelBtn.on("click", discard)
		);

		updateSubmitBtn();
		$outlet.html($el);
	}

	return {
		render: render
	};
}

module.exports = NewDeck;