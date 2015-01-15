"use strict";

var Lesson1Sub = require("./1/sublesson"),
    Lesson2Sub = require("./2/sublesson");

module.exports = {
    "1": require("screens/lessons/1/lesson"),
    "2": require("screens/lessons/2/lesson"),
    "3": require("screens/lessons/3/lesson"),
    "4": require("screens/lessons/4/lesson"),
    "5": require("screens/lessons/5/lesson"),
    "6": require("screens/lessons/6/lesson"),

    "1-m": Lesson1Sub({
        id: "1-m",
        choices: [
            {word: "mom"},
            {word: "monkey"}
        ],
        phonic: "mmh",
        activities: ["4", "5"],
        nextRoute: "lesson/1/activity/4"
    }),
    
    "1-l": Lesson1Sub({
        id: "1-l",
        choices: [
            {word: "lock"},
            {word: "lion"}
        ],
        phonic: "llh",
        activities: ["6", "7"],
        nextRoute: "lesson/1/activity/6"
    }),

    "1-n": Lesson1Sub({
        id: "1-n",
        choices: [
            {word: "nap"},
            {word: "neck"}
        ],
        phonic: "nnh",
        activities: ["8", "9"],
        nextRoute: "lesson/1/activity/8"
    }),

    "1-r": Lesson1Sub({
        id: "1-r",
        choices: [
            {word: "rat"},
            {word: "rain"}
        ],
        phonic: "rrh",
        activities: ["10", "11"],
        nextRoute: "lesson/1/activity/10"
    }),

    "1-g": Lesson1Sub({
        id: "1-g",
        choices: [
            {word: "gate"},
            {word: "giggle"}
        ],
        phonic: "gh",
        activities: ["12", "13"],
        nextRoute: "lesson/1/activity/12"
    }),


    "1-s": Lesson1Sub({
        id: "1-s",
        choices: [
            {word: "sit"},
            {word: "sister"}
        ],
        phonic: "ss",
        activities: ["14", "15"],
        nextRoute: "lesson/1/activity/14"
    }),

    "2-d": Lesson2Sub({
        id: "2-d",
        choices: [
            {word: "kid"},
            {word: "bed"}
        ],
        phonic: "dh",
        activities: ["4", "5"],
        nextRoute: "lesson/2/activity/4"
    }),

    "2-p": Lesson2Sub({
        id: "2-p",
        choices: [
            {word: "hop"},
            {word: "cap"}
        ],
        phonic: "ph",
        activities: ["6", "7"],
        nextRoute: "lesson/2/activity/6"
    }),

    "2-k": Lesson2Sub({
        id: "2-k",
        choices: [
            {word: "duck"},
            {word: "lake"}
        ],
        phonic: "kh",
        activities: ["8", "9"],
        nextRoute: "lesson/2/activity/8"
    }),

    "2-f": Lesson2Sub({
        id: "2-f",
        choices: [
            {word: "off"},
            {word: "roof"}
        ],
        phonic: "fh",
        activities: ["10", "11"],
        nextRoute: "lesson/2/activity/10"
    }),

    "2-m": Lesson2Sub({
        id: "2-m",
        choices: [
            {word: "ham"},
            {word: "gum"}
        ],
        phonic: "mmh",
        activities: ["12", "13"],
        nextRoute: "lesson/2/activity/12"
    }),

    "2-b": Lesson2Sub({
        id: "2-b",
        choices: [
            {word: "tub"},
            {word: "web"}
        ],
        phonic: "bh",
        activities: ["14", "15"],
        nextRoute: "lesson/2/activity/14"
    }),
};