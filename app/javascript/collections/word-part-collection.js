"use strict";

var WordPart = require("../models/word-part");

var WordPartCollection = Backbone.Collection.extend({
	model: WordPart
});

module.exports = WordPartCollection;