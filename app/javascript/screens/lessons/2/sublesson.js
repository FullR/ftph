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
var Lesson2Sublesson = React.createClass({
    mixins: [require("mixins/storage")],

    componentWillMount: function() {
        // store last lesson for this activity's sublesson
        this.save("last-lesson", `2-${this.props.phonic}`);
    },

    render: function() {
        var namespace      = "lesson-2-"+this.props.phonic, // sublesson namespace
            word1          = this.props.choices[0].word,
            word2          = this.props.choices[1].word,
            activities     = this.props.activities,
            lastActivityId = this.load([namespace, "last-screen"]) || (_.keys(activities)[0]),
            nextScreen     = activities[lastActivityId];

        return (
            <SubLesson {...this.props}
                id         = {`2-${this.props.phonic}`}
                title      = {lessonInfo.title}
                subtitle   = {`Lesson 2 ${this.props.phonic}`}
                nextScreen = {nextScreen}
                nextLabel  = {`Activity ${lastActivityId}`}
                sounds={{
                    "listen-for": "lessons/lesson-2/sub-lessons/instructions/listen-for",
                    "say":        "common/lessons/say",
                    "and":        "common/lessons/and",
                    "slowly":     "common/lessons/slowly",
                    "then-touch": "common/lessons/then-touch"
                }}
                
                instructions={(then) => [
                    then("say", "listen-for"), then("wait", 250),

                    then("uncenterActor"),
                    then("revealChoice", 0),
                    then("say", "words.0"),    then("wait", 250),
                    then("say", "and"),        then("wait", 250),
                    then("revealChoice", 1),
                    then("say", "words.1"),

                    then("say", "say"),        then("wait", 250),
                    then("say", "words.0"),    then("wait", 250),

                    then("say", "and"),        then("wait", 250),

                    then("say", "words.1"),    then("wait", 250),

                    then("say", "slowly"),     then("wait", 250),
                    then("say", "then-touch"), then("wait", 250),

                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson2Sublesson;