"use strict";

var Activity = require("screens/lessons/4/activity");

module.exports = {
	"1": Activity({
		id: "1",
		rhymeWord: "red",
		choices: [
			{word: "hat"},
			{word: "run"},
			{word: "bed", correct: true}
		],
		nextRoute: "lesson/4/activity/2"
	}),

	"2": Activity({
		id: "2",
		rhymeWord: "fat",
		choices: [
			{word: "mud"},
			{word: "rat", correct: "true"},
			{word: "sun"}
		],
		nextRoute: "lesson/4/activity/3"
	}),

	"3": Activity({
		id: "3",
		rhymeWord: "up",
		choices: [
			{word: "bug"},
			{word: "under"},
			{word: "cup", correct: true}
		],
		nextRoute: "lesson/4/activity/4"
	}),

	"4": Activity({
		id: "4",
		rhymeWord: "ball",
		choices: [
			{word: "pal"},
			{word: "call", correct: true},
			{word: "pill"}
		],
		nextRoute: "lesson/4/activity/5"
	}),

	"5": Activity({
		id: "5",
		rhymeWord: "in",
		choices: [
			{word: "chin", correct: true},
			{word: "on"},
			{word: "up"}
		],
		nextRoute: "lesson/4/activity/6"
	}),

	"6": Activity({
		id: "6",
		rhymeWord: "hop",
		choices: [
			{word: "pup"},
			{word: "drop", correct: true},
			{word: "rug"}
		],
		nextRoute: "lesson/4/activity/7"
	}),

	"7": Activity({
		id: "7",
		rhymeWord: "wet",
		choices: [
			{word: "deck"},
			{word: "pet", correct: true},
			{word: "wait"}
		],
		nextRoute: "lesson/4/activity/8"
	}),

	"8": Activity({
		id: "8",
		rhymeWord: "fish",
		choices: [
			{word: "fists"},
			{word: "kiss"},
			{word: "dish", correct: true}
		],
		nextRoute: "lesson/4/activity/9"
	}),

	"9": Activity({
		id: "9",
		rhymeWord: "hot",
		choices: [
			{word: "hut"},
			{word: "cot", correct: true},
			{word: "hat"}
		],
		nextRoute: "lesson/4/activity/10"
	}),

	"10": Activity({
		id: "10",
		rhymeWord: "lip",
		choices: [
			{word: "hip", correct: true},
			{word: "crib"},
			{word: "mop"}
		],
		nextRoute: "lesson/4/activity/11"
	}),

	"11": Activity({
		id: "11",
		rhymeWord: "egg",
		choices: [
			{word: "bag"},
			{word: "edge"},
			{word: "beg", correct: true}
		],
		nextRoute: "lesson/4/activity/12"
	}),

	"12": Activity({
		id: "12",
		rhymeWord: "ax",
		choices: [
			{word: "bag"},
			{word: "wax", correct: true},
			{word: "black"}
		],
		nextRoute: "lesson/4/activity/13"
	}),

	"13": Activity({
		id: "13",
		rhymeWord: "bath",
		choices: [
			{word: "Beth"},
			{word: "fast"},
			{word: "path", correct: true}
		],
		nextRoute: "lesson/4/activity/14"
	}),

	"14": Activity({
		id: "14",
		rhymeWord: "ox",
		choices: [
			{word: "hot"},
			{word: "hogs"},
			{word: "rocks", correct: true}
		],
		nextRoute: "lesson/4/activity/15"
	}),

	"15": Activity({
		id: "15",
		rhymeWord: "head",
		choices: [
			{word: "hand"},
			{word: "bread", correct: true},
			{word: "heavy"}
		],
		nextRoute: "lesson/4/activity/16"
	}),

	"16": Activity({
		id: "16",
		rhymeWord: "string",
		choices: [
			{word: "stick"},
			{word: "swing", correct: true},
			{word: "sink"}
		],
		nextRoute: "lesson/4/activity/17"
	}),

	"17": Activity({
		id: "17",
		rhymeWord: "ill",
		choices: [
			{word: "drill", correct: true},
			{word: "bell"},
			{word: "doll"}
		],
		nextRoute: "lesson/4/activity/18"
	}),

	"18": Activity({
		id: "18",
		rhymeWord: "bench",
		choices: [
			{word: "pitch"},
			{word: "wrench", correct: true},
			{word: "punch"}
		],
		nextRoute: "lesson/4/activity/19"
	}),

	"19": Activity({
		id: "19",
		rhymeWord: "truck",
		choices: [
			{word: "bucket"},
			{word: "duck", correct: true},
			{word: "trunk"}
		],
		nextRoute: "lesson/4/activity/20"
	}),

	"20": Activity({
		id: "20",
		rhymeWord: "stamp",
		choices: [
			{word: "stump"},
			{word: "camp", correct: true},
			{word: "plant"}
		],
		nextRoute: "lesson/4/feedback"
	})
};