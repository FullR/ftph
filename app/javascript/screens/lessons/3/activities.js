"use strict";

var Activity = require("screens/lessons/3/activity");

module.exports = {
    "1": Activity({
        id: "1",
        choices: [
            {word: "hop", correct: true},
            {word: "dog"},
            {word: "hot", correct: true}
        ],
        phonic: "hh",
        nextRoute: "lesson/3/activity/2"
    }),
    "2": Activity({
        id: "2",
        defaultAnimation: "choices-only",
        choices: [
            {word: "box", correct: true},
            {word: "socks"},
            {word: "bug", correct: true}
        ],
        phonic: "bh",
        nextRoute: "lesson/3/activity/3"
    }),
    "3": Activity({
        id: "3",
        defaultAnimation: "choices-only",
        choices: [
            {word: "ring"},
            {word: "mad", correct: true},
            {word: "monkey", correct: true}
        ],
        phonic: "mmh",
        nextRoute: "lesson/3/activity/4"
    }),
    "4": Activity({
        id: "4",
        defaultAnimation: "choices-only",
        choices: [
            {word: "chop", correct: true},
            {word: "itch"},
            {word: "chin", correct: true}
        ],
        phonic: "ch",
        nextRoute: "lesson/3/activity/5"
    }),
    "5": Activity({
        id: "5",
        defaultAnimation: "choices-only",
        choices: [
            {word: "read", correct: true},
            {word: "bear"},
            {word: "rose", correct: true}
        ],
        phonic: "rrh",
        nextRoute: "lesson/3/activity/6"
    }),
    "6": Activity({
        id: "6",
        defaultAnimation: "choices-only",
        choices: [
            {word: "trash"},
            {word: "desk", correct: true},
            {word: "dish", correct: true}
        ],
        phonic: "dh",
        nextRoute: "lesson/3/activity/7"
    }),
    "7": Activity({
        id: "7",
        defaultAnimation: "choices-only",
        choices: [
            {word: "pot", correct: true},
            {word: "pig", correct: true},
            {word: "top"}
        ],
        phonic: "p",
        nextRoute: "lesson/3/activity/8"
    }),
    "8": Activity({
        id: "8",
        defaultAnimation: "choices-only",
        choices: [
            {word: "violin", correct: true},
            {word: "fin"},
            {word: "vase", correct: true}
        ],
        phonic: "v",
        nextRoute: "lesson/3/activity/9"
    }),
    "9": Activity({
        id: "9",
        defaultAnimation: "choices-only",
        choices: [
            {word: "flag", correct: true},
            {word: "frog", correct: true},
            {word: "gopher"}
        ],
        phonic: "f",
        nextRoute: "lesson/3/activity/10"
    }),
    "10": Activity({
        id: "10",
        defaultAnimation: "choices-only",
        choices: [
            {word: "moth"},
            {word: "thumb", correct: true},
            {word: "thorn", correct: true}
        ],
        phonic: "th",
        nextRoute: "lesson/3/activity/11"
    }),
    "11": Activity({
        id: "11",
        defaultAnimation: "choices-only",
        choices: [
            {word: "swing", correct: true},
            {word: "ice"},
            {word: "stick", correct: true}
        ],
        phonic: "ss",
        nextRoute: "lesson/3/activity/12"
    }),
    "12": Activity({
        id: "12",
        defaultAnimation: "choices-only",
        choices: [
            {word: "trick", correct: true},
            {word: "drink"},
            {word: "table", correct: true}
        ],
        phonic: "t",
        nextRoute: "lesson/3/activity/13"
    }),
    "13": Activity({
        id: "13",
        ends: true,
        choices: [
            {word: "map", correct: true},
            {word: "mad"},
            {word: "lip", correct: true}
        ],
        phonic: "p",
        nextRoute: "lesson/3/activity/14"
    }),
    "14": Activity({
        id: "14",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "fish"},
            {word: "fist", correct: true},
            {word: "fast", correct: true}
        ],
        phonic: "st",
        nextRoute: "lesson/3/activity/15"
    }),
    "15": Activity({
        id: "15",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "man"},
            {word: "mom", correct: true},
            {word: "jam", correct: true}
        ],
        phonic: "mmh",
        nextRoute: "lesson/3/activity/16"
    }),
    "16": Activity({
        id: "16",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "itch"},
            {word: "dish", correct: true},
            {word: "trash", correct: true}
        ],
        phonic: "sh",
        nextRoute: "lesson/3/activity/17"
    }),
    "17": Activity({
        id: "17",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "sleep", correct: true},
            {word: "sheep", correct: true},
            {word: "sheet"}
        ],
        phonic: "p",
        nextRoute: "lesson/3/activity/18"
    }),
    "18": Activity({
        id: "18",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "milk", correct: true},
            {word: "spill"},
            {word: "talk", correct: true}
        ],
        phonic: "kh",
        nextRoute: "lesson/3/activity/19"
    }),
    "19": Activity({
        id: "19",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "hand", correct: true},
            {word: "desk"},
            {word: "yard", correct: true}
        ],
        phonic: "dh",
        nextRoute: "lesson/3/activity/20"
    }),
    "20": Activity({
        id: "20",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "string", correct: true},
            {word: "sink"},
            {word: "tongue", correct: true}
        ],
        phonic: "ng",
        nextRoute: "lesson/3/activity/21"
    }),
    "21": Activity({
        id: "21",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "blue", correct: true},
            {word: "shoe", correct: true},
            {word: "boot"}
        ],
        phonic: "oo",
        nextRoute: "lesson/3/activity/22"
    }),
    "22": Activity({
        id: "22",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "snow", correct: true},
            {word: "boat"},
            {word: "piano", correct: true}
        ],
        phonic: "O",
        nextRoute: "lesson/3/activity/23"
    }),
    "23": Activity({
        id: "23",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "play", correct: true},
            {word: "pail"},
            {word: "spray", correct: true}
        ],
        phonic: "A",
        nextRoute: "lesson/3/activity/24"
    }),
    "24": Activity({
        id: "24",
        defaultAnimation: "choices-only",
        ends: true,
        choices: [
            {word: "cowboy"},
            {word: "oyster", correct: true},
            {word: "fur", correct: true}
        ],
        phonic: "ir",
        nextRoute: "lesson/3/feedback"
    })
}