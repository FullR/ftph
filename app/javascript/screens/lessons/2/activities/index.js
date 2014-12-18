"use strict";

var Activity = require("screens/lessons/2/activity");

module.exports = {
	"1": Activity({
		id: "1",
		choices: [
			{word: "cat", correct: true},
			{word: "fish"},
			{word: "hop"}
		],
		phonic: "t",
		returnRoute: "lesson/2",
		nextRoute: "lesson/2/activity/2"
	}),

	"2": Activity({
		id: "2",
		choices: [
			{word: "butter"},
			{word: "two"},
			{word: "pot", correct: true}
		],
		phonic: "t",
		returnRoute: "lesson/2",
		nextRoute: "lesson/2/activity/3"
	}),

	"3": Activity({
		id: "3",
		choices: [
			{word: "stick"},
			{word: "blast", correct: true},
			{word: "sister"}
		],
		phonic: "t",
		returnRoute: "lesson/2",
		nextRoute: "lesson/2-d"
	}),

	"4": Activity({
		id: "4",
		choices: [
			{word: "dish"},
			{word: "radio"},
			{word: "mad", correct: true}
		],
		phonic: "d",
		returnRoute: "lesson/2-d",
		nextRoute: "lesson/2/activity/5"
	}),

	"5": Activity({
		id: "5",
		choices: [
			{word: "shade", correct: true},
			{word: "dive"},
			{word: "crab"}
		],
		phonic: "d",
		returnRoute: "lesson/2-d",
		nextRoute: "lesson/2-p"
	}),

	"6": Activity({
		id: "6",
		choices: [
			{word: "apple"},
			{word: "pear"},
			{word: "grape", correct: true}
		],
		phonic: "p",
		returnRoute: "lesson/2-p",
		nextRoute: "lesson/2/activity/7"
	}),

	"7": Activity({
		id: "7",
		choices: [
			{word: "crib"},
			{word: "lips"},
			{word: "slip", correct: true}
		],
		phonic: "p",
		returnRoute: "lesson/2-p",
		nextRoute: "lesson/2-k"
	}),

	"8": Activity({
		id: "8",
		choices: [
			{word: "truck", correct: true},
			{word: "tickle"},
			{word: "kite"}
		],
		phonic: "kh",
		returnRoute: "lesson/2-k",
		nextRoute: "lesson/2/activity/9"
	}),

	"9": Activity({
		id: "9",
		choices: [
			{word: "kitchen"},
			{word: "pickle"},
			{word: "kick", correct: true}
		],
		phonic: "kh",
		returnRoute: "lesson/2-k",
		nextRoute: "lesson/2-f"
	}),

	"10": Activity({
		id: "10",
		choices: [
			{word: "moth"},
			{word: "laugh", correct: true},
			{word: "office"}
		],
		phonic: "f",
		returnRoute: "lesson/2-f",
		nextRoute: "lesson/2/activity/11"
	}),

	"11": Activity({
		id: "11",
		choices: [
			{word: "coffee"},
			{word: "bath"},
			{word: "cliff", correct: true}
		],
		phonic: "f",
		returnRoute: "lesson/2-f",
		nextRoute: "lesson/2-m"
	}),

	"12": Activity({
		id: "12",
		choices: [
			{word: "stamp"},
			{word: "swim", correct: true},
			{word: "milk"}
		],
		phonic: "m",
		returnRoute: "lesson/2-m",
		nextRoute: "lesson/2/activity/13"
	}),

	"13": Activity({
		id: "13",
		choices: [
			{word: "chin"},
			{word: "man"},
			{word: "crumb", correct: true}
		],
		phonic: "m",
		returnRoute: "lesson/2-m",
		nextRoute: "lesson/2-b"
	}),

	"14": Activity({
		id: "14",
		choices: [
			{word: "bud"},
			{word: "grab", correct: true},
			{word: "map"}
		],
		phonic: "b",
		returnRoute: "lesson/2-b",
		nextRoute: "lesson/2/activity/15"
	}),

	"15": Activity({
		id: "15",
		choices: [
			{word: "trap"},
			{word: "globe", correct: true},
			{word: "boxer"}
		],
		phonic: "b",
		returnRoute: "lesson/2-b",
		nextRoute: "lesson/2/feedback"
	})
};