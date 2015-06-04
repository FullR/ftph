var React        = require("react");
var WordActivity = require("screens/activity/word");
var get          = require("utility/functional/get");
var render       = require("render");
var lessonInfo   = require("./info");

var Lesson5Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "touch-the": "lessons/lesson-5/activities/instructions/touch-the"
        };
    },

    render: function() {
        var choices    = this.props.choices;
        var nextScreen = this.props.nextScreen;
        var activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                requiredSelectionCount = {2}
                autoplayAnimation      = {this.props.autoplayAnimation || "choices-only"}
                lessonId               = {lessonInfo.id}
                section                = {lessonInfo.section}
                lessonTitle            = {lessonInfo.title}
                activityCount          = {lessonInfo.activityCount}
                sounds                 = {this.getSounds()}
                lessonScreen           = {require("screens/lessons/5")}

                instructions={function(then) {
                    return [
                        then("say", "touch-the"),
                        then("wait", 250),
                        then("uncenterActor"),

                        // Reveal and say words
                        ...choices.map((choice, index) => [
                            then("revealChoice", index),
                            then("say", ["words", index]),
                            then("wait", 250)
                        ]),

                        then("sit")
                    ];
                }}

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/words"),
                        selectedWords = activity.getSelected().map(get("word"));
                    
                    render(
                        <Feedback
                            lessonId      = {lessonInfo.id}
                            lessonTitle   = {lessonInfo.title}
                            activityId    = {activityId}
                            activityCount = {lessonInfo.activityCount}
                            section       = {lessonInfo.section}
                            correct       = {activity.isCorrect()}
                            nextScreen    = {nextScreen}
                            words         = {selectedWords}
                            sounds={{
                                "rhymes-with":    "lessons/lesson-5/activities/feedback/rhymes-with",
                                "does-not-rhyme": "lessons/lesson-5/activities/feedback/does-not-rhyme"
                            }}

                            correctAnimation={(then) => [
                                then("say", "words.0"),        then("wait", 250),
                                then("say", "rhymes-with"),    then("wait", 250),
                                then("say", "words.1"),        then("wait", 250)
                            ]}

                            incorrectAnimation={(then) => [
                                then("say", "words.0"),        then("wait", 250),
                                then("say", "does-not-rhyme"), then("wait", 250),
                                then("say", "words.1"),        then("wait", 250),
                            ]}/>
                    );
                }}/>
        );
    }
});

module.exports = Lesson5Activity;