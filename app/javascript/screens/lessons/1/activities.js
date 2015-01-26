"use strict";

var linkObject = require("utility/link-object"),
    Activity1to3 = require("screens/lessons/1/activity-1-3"),
    Activity4to15 = require("screens/lessons/1/activity-4-15");

module.exports = linkObject({
    "1": Activity1to3({ 
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

    "2": Activity1to3({
        id: "2",
        choices: [
            {word: "bug"}, 
            {word: "ten", correct: true}, 
            {word: "car"}
        ],
        returnRoute: "lesson/1",
        nextRoute: "lesson/1/activity/3",
        defaultAnimation: "choices-only",
        phonic: "t" 
    }),

    "3": Activity1to3({
        id: "3",
        choices: [
            {word: "wet"}, 
            {word: "pet"}, 
            {word: "toys", correct: true}
        ],
        returnRoute: "lesson/1",
        nextRoute: "lesson/1-m",
        defaultAnimation: "choices-only",
        phonic: "t" 
    }),

    "4": Activity4to15({
        id: "4",
        choices: [
            {word: "map", correct: true}, 
            {word: "jam"}, 
            {word: "hammer"}
        ],
        returnRoute: "lesson/1-m",
        nextRoute: "lesson/1/activity/5",
        phonic: "mmh",
        lessonWords: ["mom", "monkey"]
    }),

    "5": Activity4to15({
        id: "5",
        choices: [
            {word: "clam"}, 
            {word: "ram"}, 
            {word: "man", correct: true}
        ],
        returnRoute: "lesson/1-m",
        nextRoute: "lesson/1-l",
        defaultAnimation: "choices-only",
        phonic: "mmh",
        lessonWords: ["mom", "monkey"]
    }),

    "6": Activity4to15({
        id: "6",
        choices: [
            {word: "ball"}, 
            {word: "pillow"}, 
            {word: "lip", correct: true}
        ],
        returnRoute: "lesson/1-l",
        nextRoute: "lesson/1/activity/7",
        phonic: "llh",
        lessonWords: ["lock", "lion"]
    }),

    "7": Activity4to15({
        id: "7",
        choices: [
            {word: "leg", correct: true}, 
            {word: "bell"}, 
            {word: "fall"}
        ],
        returnRoute: "lesson/1-l",
        nextRoute: "lesson/1-n",
        defaultAnimation: "choices-only",
        phonic: "llh",
        lessonWords: ["lock", "lion"]
    }),

    "8": Activity4to15({
        id: "8",
        choices: [
            {word: "run"}, 
            {word: "ant"}, 
            {word: "nut", correct: true}
        ],
        returnRoute: "lesson/1-n",
        nextRoute: "lesson/1/activity/9",
        phonic: "nnh",
        lessonWords: ["nap", "neck"]
    }),

    "9": Activity4to15({
        id: "9",
        choices: [
            {word: "hand"}, 
            {word: "net", correct: true}, 
            {word: "bun"}
        ],
        returnRoute: "lesson/1-n",
        nextRoute: "lesson/1-r",
        defaultAnimation: "choices-only",
        phonic: "nnh",
        lessonWords: ["nap", "neck"]
    }),

    "10": Activity4to15({
        id: "10",
        choices: [
            {word: "dirt"}, 
            {word: "rug", correct: true}, 
            {word: "stir"}
        ],
        returnRoute: "lesson/1-r",
        nextRoute: "lesson/1/activity/11",
        phonic: "rrh",
        lessonWords: ["rat", "rain"]
    }),

    "11": Activity4to15({
        id: "11",
        choices: [
            {word: "red", correct: true}, 
            {word: "door"}, 
            {word: "church"}
        ],
        returnRoute: "lesson/1-r",
        nextRoute: "lesson/1-g",
        defaultAnimation: "choices-only",
        phonic: "rrh",
        lessonWords: ["rat", "rain"]
    }),

    "12": Activity4to15({
        id: "12",
        choices: [
            {word: "gum", correct: true}, 
            {word: "igloo"}, 
            {word: "bug"}
        ],
        returnRoute: "lesson/1-g",
        nextRoute: "lesson/1/activity/13",
        phonic: "gh",
        lessonWords: ["gate", "giggle"]
    }),

    "13": Activity4to15({
        id: "13",
        choices: [
            {word: "hug"}, 
            {word: "gym"}, 
            {word: "girl", correct: true}
        ],
        returnRoute: "lesson/1-g",
        nextRoute: "lesson/1-s",
        defaultAnimation: "choices-only",
        phonic: "gh",
        lessonWords: ["gate", "giggle"]
    }),

    "14": Activity4to15({
        id: "14",
        choices: [
            {word: "bus"}, 
            {word: "zoo"}, 
            {word: "sing", correct: true}
        ],
        returnRoute: "lesson/1-s",
        nextRoute: "lesson/1/activity/15",
        phonic: "ss",
        lessonWords: ["sit", "sister"]
    }),

    "15": Activity4to15({
        id: "15",
        choices: [
            {word: "fish"}, 
            {word: "ship"}, 
            {word: "sled", correct: true}
        ],
        returnRoute: "lesson/1-s",
        nextRoute: "lesson/1/feedback",
        defaultAnimation: "choices-only",
        phonic: "ss",
        lessonWords: ["sit", "sister"]
    })
});