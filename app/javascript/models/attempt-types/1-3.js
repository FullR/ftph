"use strict";

var _ = require("lodash"),
	dictionary = require("../../dictionary/dictionary"),
	Attempt = require("../attempt");

function Attempt1to3(options) {
	_.extend(this, options);
	this.used = this.used || [];
}

Attempt1to3.deserialize = function(serialized) {
	return new Attempt1to3({
		review: serialized.review,
		unused: serialized.unused.map(dictionary.deserialize),
		choices:  serialized.choices ? serialized.choices.map(Choice.deserialize) : null,
		used: serialized.used.map(function(choice) {
			return {
				correct: choice.correct,
				content: dictionary.deserialize(choice.content)
			};
		})
	});
};

Attempt1to3.prototype = _.clone(Attempt.prototype);

_.extend(Attempt1to3.prototype, {
	generateChoices: function() {

	},

	getChoices: function() {
		return this.choices || (this.choices = this.generateChoices());
	}
});

module.exports = Attempt1to3;