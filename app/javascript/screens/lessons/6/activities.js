"use strict";

var Activity = require("screens/lessons/6/activity");

// Lesson 6 Activites
module.exports = {
	"1": Activity({
		id: "1",
		choices: [
			{word: "box"},
			{word: "egg", correct: true},
			{word: "cat"}
		],
		nextRoute: "lesson/6/activity/2",
		phonics: ["eh", "g"]
	}),

	"2": Activity({
		id: "2",
		choices: [
			{word: "hot"},
			{word: "cup"},
			{word: "up", correct: true}
		],
		nextRoute: "lesson/6/activity/3",
		phonics: ["uh", "p"]
	}),

	"3": Activity({
		id: "3",
		choices: [
			{word: "in", correct: true},
			{word: "on"},
			{word: "under"}
		],
		nextRoute: "lesson/6/activity/4",
		phonics: ["ih", "n"]
	}),

	"4": Activity({
		id: "4",
		choices: [
			{word: "ice"},
			{word: "ax", correct: true},
			{word: "ash"}
		],
		nextRoute: "lesson/6/activity/5",
		phonics: ["ah", "cks"]
	}),

	"5": Activity({
		id: "5",
		choices: [
			{word: "on"},
			{word: "off"},
			{word: "ox", correct: true}
		],
		nextRoute: "lesson/6/activity/6",
		phonics: ["oh", "cks"]
	}),

	"6": Activity({
		id: "6",
		choices: [
			{word: "add", correct: true},
			{word: "head"},
			{word: "hat"}
		],
		nextRoute: "lesson/6/activity/7",
		phonics: ["ah", "d"]
	}),

	"7": Activity({
		id: "7",
		choices: [
			{word: "bug", correct: true},
			{word: "dog"},
			{word: "rug"}
		],
		nextRoute: "lesson/6/activity/8",
		phonics: ["b", "uh", "g"]
	}),

	"8": Activity({
		id: "8",
		choices: [
			{word: "sick"},
			{word: "sit", correct: true},
			{word: "stick"}
		],
		nextRoute: "lesson/6/activity/9",
		phonics: ["s", "ih", "t"]
	}),

	"9": Activity({
		id: "9",
		choices: [
			{word: "mad", correct: true},
			{word: "mask"},
			{word: "dad"}
		],
		nextRoute: "lesson/6/activity/10",
		phonics: ["m", "ah", "d"]
	}),

	"10": Activity({
		id: "10",
		choices: [
			{word: "tape"},
			{word: "tub"},
			{word: "top", correct: true}
		],
		nextRoute: "lesson/6/activity/11",
		phonics: ["t", "oh", "p"]
	}),

	"11": Activity({
		id: "11",
		choices: [
			{word: "road"},
			{word: "red", correct: true},
			{word: "wrench"}
		],
		nextRoute: "lesson/6/activity/12",
		phonics: ["r", "eh", "d"]
	}),

	"12": Activity({
		id: "12",
		choices: [
			{word: "wag"},
			{word: "wig", correct: true},
			{word: "wick"}
		],
		nextRoute: "lesson/6/activity/13",
		phonics: ["w", "ih", "g"]
	}),

	"13": Activity({
		id: "13",
		choices: [
			{word: "duck", correct: true},
			{word: "dock"},
			{word: "deck"}
		],
		nextRoute: "lesson/6/activity/14",
		phonics: ["d", "uh", "k"]
	}),

	"14": Activity({
		id: "14",
		choices: [
			{word: "chop"},
			{word: "ship"},
			{word: "shop", correct: true}
		],
		nextRoute: "lesson/6/activity/15",
		phonics: ["sh", "oh", "p"]
	}),

	"15": Activity({
		id: "15",
		choices: [
			{word: "itch"},
			{word: "inch", correct: true},
			{word: "bench"}
		],
		nextRoute: "lesson/6/feedback",
		phonics: ["ih", "n", "ch"]
	})
};