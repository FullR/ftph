"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    WordImage    = require("components/word-image"),
    render       = require("render");

var Lesson4Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "touch-the": "assets/audio/lessons/lesson-4/activities/instructions/touch-the",
            "rhyme-word": "assets/audio/words/activity-words/" + this.props.word
        };
    },

    componentWillMount: function() {
        this.save("lesson-4.last-screen", this.props.id);
    },

    render: function() {
        var choices = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            rhymeWord = this.props.word;

        return (
            <WordActivity {...this.props}
                lessonId="4"
                section="1"
                className="lesson-4-activity"
                lessonTitle="Rhyme Match"
                activityCount="20"
                sounds={this.getSounds()}
                lessonScreen={require("screens/lessons/4")}

                onSubmit={(activity, correct) => {
                    this.save("lesson-4.activities."+activityId+".correct", correct);
                }}

                instructions={function(then) {
                    return [
                        then("uncenterActor"),
                        then("say", "touch-the"), then("wait", 250),
                        then("say", "rhyme-word"), then("wait", 250),

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
                        correct = activity.isCorrect(),
                        selected = activity.getSelected(),
                        feedback = (
                            <Feedback
                                lessonId="4"
                                lessonTitle="Rhyme Match"
                                activityId={activityId}
                                activityCount="20"
                                section="1"
                                correct={correct}
                                nextScreen={nextScreen}
                                word={activity.getSelected()[0].word}
                                sounds={{
                                    "does-not": "assets/audio/lessons/lesson-4/activities/feedback/does-not",
                                    "rhyme": "assets/audio/lessons/lesson-4/activities/feedback/rhyme",

                                    "selected": "assets/audio/words/activity-words/"+selected[0].word,
                                    "rhyme-word": "assets/audio/words/activity-words/"+rhymeWord
                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "selected"),  then("wait", 250),
                                        then("say", "rhyme"),     then("wait", 250),
                                        then("say", "rhyme-word")
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "selected"),  then("wait", 250),
                                        then("say", "does-not"),  then("wait", 250),
                                        then("say", "rhyme-word")
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}>
                    <div className='rhyme-word'>
                        <WordImage word={this.props.word} disableHCenter={true}/>
                    </div>
                </WordActivity>
        );
    }
});

module.exports = Lesson4Activity;