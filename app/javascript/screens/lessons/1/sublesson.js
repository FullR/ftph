var _          = require("lodash");
var React      = require("react");
var SubLesson  = require("screens/lesson/sub");
var lessonInfo = require("./info");

/*
    Props:
        phonic,
        phonicFilename,
        choices
*/
var Lesson1Sublesson = React.createClass({
    mixins: [require("mixins/storage")],

    componentWillMount: function() {
        this.save("last-lesson", `1-${this.props.phonic}`);
    },

    render: function() {
        var namespace = `lesson-1-${this.props.phonic}`;
        var activities = this.props.activities;
        var lastActivityId = this.load([namespace, "last-screen"]) || (_.keys(activities)[0]);
        var nextScreen = activities[lastActivityId];

        return (
            <SubLesson {...this.props}
                id         = {`1-${this.props.phonic}`}
                title      = {lessonInfo.title}
                subtitle   = {`Lesson 1 /${this.props.phonic}/`}
                section    = {lessonInfo.section}
                nextScreen = {nextScreen}
                nextLabel  = {`Activity ${lastActivityId}`}

                sounds={{
                    "listen-for": "lessons/lesson-1/sub-lessons/instructions/listen-for",
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
                    then("say", "words.1"),    then("wait", 250),

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

module.exports = Lesson1Sublesson;