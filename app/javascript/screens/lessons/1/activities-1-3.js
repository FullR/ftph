"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    render       = require("render");

var Lesson1Activity1to3 = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "t": "assets/audio/phonics/activity-phonics/t",
            "touch-the-word": "assets/audio/lessons/lesson-1/activities/instructions/touch-the-word"
        };
    },

    componentWillMount: function() {
        this.save("lesson-1.last-screen", this.props.id);
    },

    render: function() {
        var choices = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                lessonId="1"
                section="1"
                lessonTitle="Beginning Sounds"
                activityCount="15"
                sounds={this.getSounds()}
                lessonScreen={require("screens/lessons/1")}

                onSubmit={(activity, correct) => {
                    this.save("lesson-1.activities."+activityId+".correct", correct);
                }}

                instructions={function(then) {
                    return [
                        then("say", "touch-the-word"), then("wait", 250),
                        then("say", "t"), then("wait", 250),

                        then("uncenterActor"),
                        then("revealChoice", 0),
                        then("say", choices[0].word), then("wait", 250),

                        then("revealChoice", 1),
                        then("say", choices[1].word), then("wait", 250),

                        then("revealChoice", 2),
                        then("say", choices[2].word), then("wait", 250),

                        then("sit")
                    ];
                }}

                renderFeedback={function(activity) {
                    var Feedback = require("screens/activity-feedback/single-word"),
                        feedback = (
                            <Feedback
                                lessonId="1"
                                lessonTitle="Beginning Sounds"
                                activityId={activityId}
                                activityCount="15"
                                section="1"
                                correct={activity.isCorrect()}
                                nextScreen={nextScreen}
                                word={activity.getSelected()[0].word}
                                sounds={{
                                    "doesnt-begin": "assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin",
                                    "begins-with":  "assets/audio/lessons/lesson-1/activities/feedback/begins-with",
                                    "t":            "assets/audio/phonics/activity-phonics/t"
                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "word"), then("wait", 250),
                                        then("say", "begins-with"), then("wait", 250),
                                        then("say", "t")
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "word"), then("wait", 250),
                                        then("say", "doesnt-begin"), then("wait", 250),
                                        then("say", "t")
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson1Activity1to3;