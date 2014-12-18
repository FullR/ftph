"use strict";

var Activity = require("screens/lessons/1/activity");

module.exports = {
	"1": Activity({ 
		id: "1", 
		choices: [
			{word: "top", correct: true}, 
			{word: "pig"}, 
			{word: "hen"}
		],
		returnRoute: "lesson/1",
		nextRoute: "lesson/1/activity/2",
		phonic: "t" 
	}),

	"2": Activity({
		id: "2",
		choices: [
			{word: "bug"}, 
			{word: "ten", correct: true}, 
			{word: "car"}
		],
		returnRoute: "lesson/1",
		nextRoute: "lesson/1/activity/3",
		phonic: "t" 
	}),

	"3": Activity({
		id: "3",
		choices: [
			{word: "wet"}, 
			{word: "pet"}, 
			{word: "toys", correct: true}
		],
		returnRoute: "lesson/1",
		nextRoute: "lesson/1-m",
		phonic: "t" 
	}),

	"4": Activity({
		id: "4",
		choices: [
			{word: "map", correct: true}, 
			{word: "jam"}, 
			{word: "hammer"}
		],
		returnRoute: "lesson/1-m",
		nextRoute: "lesson/1/activity/5",
		phonic: "mmh" 
	}),

	"5": Activity({
		id: "5",
		choices: [
			{word: "clam"}, 
			{word: "ram"}, 
			{word: "man", correct: true}
		],
		returnRoute: "lesson/1-m",
		nextRoute: "lesson/1-l",
		phonic: "mmh" 
	}),

	"6": Activity({
		id: "6",
		choices: [
			{word: "ball"}, 
			{word: "pillow"}, 
			{word: "lip", correct: true}
		],
		returnRoute: "lesson/1-l",
		nextRoute: "lesson/1/activity/7",
		phonic: "llh" 
	}),

	"7": Activity({
		id: "7",
		choices: [
			{word: "leg", correct: true}, 
			{word: "bell"}, 
			{word: "fall"}
		],
		returnRoute: "lesson/1-l",
		nextRoute: "lesson/1-n",
		phonic: "llh" 
	}),

	"8": Activity({
		id: "8",
		choices: [
			{word: "run"}, 
			{word: "ant"}, 
			{word: "nut", correct: true}
		],
		returnRoute: "lesson/1-n",
		nextRoute: "lesson/1/activity/9",
		phonic: "nnh" 
	}),

	"9": Activity({
		id: "9",
		choices: [
			{word: "hand"}, 
			{word: "net", correct: true}, 
			{word: "bun"}
		],
		returnRoute: "lesson/1-n",
		nextRoute: "lesson/1-r",
		phonic: "nnh" 
	}),

	"10": Activity({
		id: "10",
		choices: [
			{word: "dirt"}, 
			{word: "rug", correct: true}, 
			{word: "stir"}
		],
		returnRoute: "lesson/1-r",
		nextRoute: "lesson/1/activity/11",
		phonic: "rrh" 
	}),

	"11": Activity({
		id: "11",
		choices: [
			{word: "red", correct: true}, 
			{word: "door"}, 
			{word: "church"}
		],
		returnRoute: "lesson/1-r",
		nextRoute: "lesson/1-g",
		phonic: "rrh" 
	}),

	"12": Activity({
		id: "12",
		choices: [
			{word: "gum", correct: true}, 
			{word: "igloo"}, 
			{word: "bug"}
		],
		returnRoute: "lesson/1-g",
		nextRoute: "lesson/1/activity/13",
		phonic: "gh" 
	}),

	"13": Activity({
		id: "13",
		choices: [
			{word: "hug"}, 
			{word: "gym"}, 
			{word: "girl", correct: true}
		],
		returnRoute: "lesson/1-g",
		nextRoute: "lesson/1-s",
		phonic: "gh" 
	}),

	"14": Activity({
		id: "14",
		choices: [
			{word: "bus"}, 
			{word: "zoo"}, 
			{word: "sing", correct: true}
		],
		returnRoute: "lesson/1-s",
		nextRoute: "lesson/1/activity/15",
		phonic: "ss" 
	}),

	"15": Activity({
		id: "15",
		choices: [
			{word: "fish"}, 
			{word: "ship"}, 
			{word: "sled", correct: true}
		],
		returnRoute: "lesson/1-s",
		nextRoute: "lesson/1/feedback",
		phonic: "ss" 
	})
};