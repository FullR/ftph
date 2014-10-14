"use strict";

var _ = require("lodash");

function Deck(name, cards) {
	name = (name && name.length > 0) ? name : "Untitled Deck";
	cards = cards || [];
	
	return {
		name: name,
		cards: cards,
		shuffle: function() {
			return _.shuffle(cards);
		},

		setName: function(_name) {
			if(_name && _name.length > 0) {
				name = this.name = _name;
			}
			else {
				name = this.name = "Untitled Deck";
			}
		},
		
		setCards: function(_cards) {
			_cards = _cards || [];

			this.cards = cards = _cards;
		}
	};
}

module.exports = Deck;