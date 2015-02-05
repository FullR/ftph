"use strict";

var _ = require("lodash"),
    React = require("react"),
    SubLesson = require("screens/lesson/sub");

/*
    Props:
        phonic,
        phonicFilename,
        choices
*/
var Lesson2Sublesson = React.createClass({
    mixins: [require("mixins/storage")],

    componentWillMount: function() {
        this.save("last-lesson", "2-"+this.props.phonic);
    },

    render: function() {
        var word1          = this.props.choices[0].word,
            word2          = this.props.choices[1].word,
            activities     = this.props.activities,
            lastActivityId = this.load("lesson-2-"+this.props.phonic+".last-screen") || (_.keys(activities)[0]),
            nextScreen     = activities[lastActivityId];

        return (
            <SubLesson {...this.props}
                id={"2-"+this.props.phonic}
                title="Ending Sounds"
                subtitle={"Lesson 2 " + this.props.phonic}
                nextScreen={nextScreen}
                nextLabel={"Activity " + lastActivityId}
                sounds={{
                    "listen-for": "assets/audio/lessons/lesson-2/sub-lessons/instructions/listen-for",
                    "as-in":      "assets/audio/lessons/lesson-2/sub-lessons/instructions/as-in",
                    "and":        "assets/audio/common/lessons/and"
                }}
                
                instructions={function(then) {
                    return [
                        then("say", "listen-for"), then("wait", 250),
                        then("say", "phonic"), then("wait", 250),
                        then("say", "as-in"), then("wait", 250),

                        then("uncenterActor"),
                        then("revealChoice", 0),
                        then("say", word1), then("wait", 250),

                        then("say", "and"), then("wait", 250),

                        then("revealChoice", 1),
                        then("say", word2),

                        then("sit")
                    ];
                }}/>
        );
    }
});

module.exports = Lesson2Sublesson;