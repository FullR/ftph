"use strict";

var parts = require("./word-parts"),
	index;

index = parts.reduce(function(index, part) {
	var id = part.get("id"),
		type = part.get("type");

	index[type][id] = part;
	index.any[id] = part;
	return index;
}, { prefix: {}, root: {}, suffix: {}, any: {} });

module.exports = {
	get: function(id, type) {
		var typeIndex = index[type],
			part;

		if(!typeIndex) {
			throw "Word part type not found " + type;
		}
		else {
			part = typeIndex[id];

			if(!part) {
				throw "Word part not found " + id + " ("+type+")";
			}
			else {
				return part;
			}
		}
	}
};