"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    render       = require("render");

var Lesson1Activity4to15 = React.createClass({
    mixins: [
        require("mixins/extend-sounds"),
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "word1": "assets/audio/words/activity-words/"+this.props.word1,
            "word2": "assets/audio/words/activity-words/"+this.props.word2,
            "touch-same-sound": "assets/audio/lessons/lesson-1/activities/instructions/touch-same-sound",
            "and": "assets/audio/common/and"
        };
    },

    componentWillMount: function() {
        this.save(this.props.namespace+".last-screen", this.props.id);
        this.save("lesson-1.last-screen", this.props.id);
    },

    render: function() {
        var choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            word1      = this.props.word1,
            word2      = this.props.word2;

        return (
            <WordActivity {...this.props}
                lessonId="1"
                section="1"
                lessonTitle="Beginning Sounds"
                activityCount="15"
                sounds={this.getSounds()}
                lessonScreen={this.props.lessonScreen}

                onSubmit={(activity, correct) => {
                    this.save("lesson-1.activities."+activityId+".correct", correct);
                }}

                instructions={function(then) {
                    return [
                        then("say", "touch-same-sound"), then("wait", 250),
                        then("say", "word1"),            then("wait", 250),
                        then("say", "and"),              then("wait", 250),
                        then("say", "word2"),            then("wait", 250),

                        then("uncenterActor"),

                        // reveal/say choice 0
                        then("revealChoice", 0),
                        then("say", choices[0].word),    then("wait", 250),

                        // reveal/say choice 1
                        then("revealChoice", 1),
                        then("say", choices[1].word),    then("wait", 250),

                        // reveal/say choice 2
                        then("revealChoice", 2),
                        then("say", choices[2].word),    then("wait", 250),

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
                                    "doesnt-begin-same": "assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin-same",
                                    "begins-with-same":  "assets/audio/lessons/lesson-1/activities/feedback/begins-with-same",
                                    "word1": "assets/audio/words/activity-words/"+word1,
                                    "word2": "assets/audio/words/activity-words/"+word2,
                                    "and": "assets/audio/common/activities/and"
                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "word"),              then("wait", 250),
                                        then("say", "begins-with-same"),  then("wait", 250),
                                        then("say", "word1"),             then("wait", 250),
                                        then("say", "and"),               then("wait", 250),
                                        then("say", "word2")
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "word"),              then("wait", 250),
                                        then("say", "doesnt-begin-same"), then("wait", 250),
                                        then("say", "word1"),             then("wait", 250),
                                        then("say", "and"),               then("wait", 250),
                                        then("say", "word2")
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson1Activity4to15;