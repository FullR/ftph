"use strict";

var Activity = require("screens/lessons/5/activity");

module.exports = {	
	"1": Activity({
		id: "1",
		choices: [
			{word: "bat", correct: true},
			{word: "rat", correct: true},
			{word: "cake"}
		],
		nextRoute: "lesson/5/activity/2"
	}),

	"2": Activity({
		id: "2",
		choices: [
			{word: "red", correct: true},
			{word: "hot"},
			{word: "sled", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/3"
	}),

	"3": Activity({
		id: "3",
		choices: [
			{word: "leg", correct: true},
			{word: "egg", correct: true},
			{word: "box"}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/4"
	}),

	"4": Activity({
		id: "4",
		choices: [
			{word: "sit", correct: true},
			{word: "hop"},
			{word: "hit", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/5"
	}),

	"5": Activity({
		id: "5",
		choices: [
			{word: "mad", correct: true},
			{word: "mask"},
			{word: "bad", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/6"
	}),

	"6": Activity({
		id: "6",
		choices: [
			{word: "nine"},
			{word: "run", correct: true},
			{word: "sun", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/7"
	}),

	"7": Activity({
		id: "7",
		choices: [
			{word: "mop", correct: true},
			{word: "cop", correct: true},
			{word: "cup"}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/8"
	}),

	"8": Activity({
		id: "8",
		choices: [
			{word: "cap"},
			{word: "ax", correct: true},
			{word: "tacks", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/9"
	}),

	"9": Activity({
		id: "9",
		choices: [
			{word: "in", correct: true},
			{word: "on"},
			{word: "pin", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/10"
	}),

	"10": Activity({
		id: "10",
		choices: [
			{word: "trip", correct: true},
			{word: "trap"},
			{word: "flip", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/11"
	}),

	"11": Activity({
		id: "11",
		choices: [
			{word: "shop"},
			{word: "shot", correct: true},
			{word: "knot", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/12"
	}),

	"12": Activity({
		id: "12",
		choices: [
			{word: "stop", correct: true},
			{word: "step"},
			{word: "drop", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/13"
	}),

	"13": Activity({
		id: "13",
		choices: [
			{word: "ant", correct: true},
			{word: "tent"},
			{word: "plant", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/14"
	}),

	"14": Activity({
		id: "14",
		choices: [
			{word: "chin", correct: true},
			{word: "shin", correct: true},
			{word: "inch"}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/15"
	}),

	"15": Activity({
		id: "15",
		choices: [
			{word: "thread", correct: true},
			{word: "three"},
			{word: "head", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/16"
	}),

	"16": Activity({
		id: "16",
		choices: [
			{word: "sneeze", correct: true},
			{word: "cheese", correct: true},
			{word: "tree"}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/17"
	}),

	"17": Activity({
		id: "17",
		choices: [
			{word: "square", correct: true},
			{word: "jar"},
			{word: "bear", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/18"
	}),

	"18": Activity({
		id: "18",
		choices: [
			{word: "string", correct: true},
			{word: "strong"},
			{word: "king", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/activity/19"
	}),

	"19": Activity({
		id: "19",
		choices: [
			{word: "shark", correct: true},
			{word: "sharp"},
			{word: "park", correct: true}
		],
		defaultAnimation: "choices-only",
		nextRoute: "lesson/5/feedback"
	})
};