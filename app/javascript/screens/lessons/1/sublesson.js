"use strict";

var _          = require("lodash"),
    React      = require("react"),
    SubLesson  = require("screens/lesson/sub"),
    lessonInfo = require("./info");

/*
    Props:
        phonic,
        phonicFilename,
        choices
*/
var Lesson1Sublesson = React.createClass({
    mixins: [require("mixins/storage")],

    componentWillMount: function() {
        this.save("last-lesson", "1-"+this.props.phonic);
    },

    render: function() {
        var namespace      = "lesson-1-"+this.props.phonic,
            word1          = this.props.choices[0].word,
            word2          = this.props.choices[1].word,
            activities     = this.props.activities,
            lastActivityId = this.load([namespace, "last-screen"]) || (_.keys(activities)[0]),
            nextScreen     = activities[lastActivityId];

        return (
            <SubLesson {...this.props}
                id         = {"1-"+this.props.phonic}
                title      = {lessonInfo.title}
                subtitle   = {"Lesson 1 " + this.props.phonic}
                section    = {lessonInfo.section}
                nextScreen = {nextScreen}
                nextLabel  = {"Activity " + lastActivityId}

                sounds={{
                    "listen-for": "assets/audio/lessons/lesson-1/sub-lessons/instructions/listen-for",
                    "as-in":      "assets/audio/lessons/lesson-1/sub-lessons/instructions/as-in",
                    "and":        "assets/audio/common/lessons/and"
                }}
                
                instructions={function(then) {
                    return [
                        then("say", "listen-for"), then("wait", 250),
                        then("say", "phonic"),     then("wait", 250),
                        then("say", "as-in"),      then("wait", 250),

                        then("uncenterActor"),
                        then("revealChoice", 0),
                        then("say", word1),        then("wait", 250),

                        then("say", "and"),        then("wait", 250),

                        then("revealChoice", 1),
                        then("say", word2),

                        then("sit")
                    ];
                }}/>
        );
    }
});

module.exports = Lesson1Sublesson;