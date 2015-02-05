"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    render       = require("render");

var Lesson2Activity1to3 = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    section: "1",
    lessonId: "2",
    title: "Ending Sounds",
    activityCount: 15,

    getAdditionalSounds: function() {
        return {
            "t": "assets/audio/phonics/activity-phonics/t",
            "touch-the-word": "assets/audio/lessons/lesson-2/activities/instructions/touch-the-word"
        };
    },

    render: function() {
        var choices = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                lessonId={this.lessonId}
                lessonTitle={this.title}
                activityCount={this.activityCount}
                sounds={this.getSounds()}
                lessonScreen={require("screens/lessons/2")}

                onSubmit={(activity, correct) => {
                    this.save("lesson-2.activities."+activityId+".correct", correct);
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

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/single-word"),
                        feedback = (
                            <Feedback
                                lessonId={this.id}
                                lessonTitle={this.title}
                                activityId={activityId}
                                activityCount={this.activityCount}
                                section={this.section}
                                correct={activity.isCorrect()}
                                nextScreen={nextScreen}
                                word={activity.getSelected()[0].word}
                                sounds={{
                                    "doesnt-end": "assets/audio/lessons/lesson-2/activities/feedback/doesnt-end",
                                    "ends-with":  "assets/audio/lessons/lesson-2/activities/feedback/ends-with",
                                    "t":            "assets/audio/phonics/activity-phonics/t"
                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "word"), then("wait", 250),
                                        then("say", "ends-with"), then("wait", 250),
                                        then("say", "t")
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "word"), then("wait", 250),
                                        then("say", "doesnt-end"), then("wait", 250),
                                        then("say", "t")
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson2Activity1to3;