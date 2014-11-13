"use strict";

var _ = require("lodash"),
	dictionary = require("../dictionary/dictionary");

function Choice(options) {
	_.extend(this, options);
}

Choice.deserialize = function(serialized) {
	return new Choice({
		correct:  serialized.correct,
		selected: serialized.selected,
		word:     dictionary.get(serialized.word)
	});
};

_.extend(Choice.prototype, {
	serialize: function() {
		return {
			correct:  !!this.correct,
			selected: !!this.selected,
			word:     this.word.serialize()
		};
	}
});

module.exports = Choice;