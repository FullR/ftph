var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    render       = require("render"),
    info         = require("./info");

var Lesson1Activity1to3 = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "t":              "phonics/activity-phonics/t",
            "touch-the-word": "lessons/lesson-1/activities/instructions/touch-the-word"
        };
    },

    componentWillMount: function() {
        this.save([info.namespace, "last-screen"], this.props.id);
    },

    render: function() {
        var Feedback   = require("screens/activity-feedback/single-word"),
            choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                lessonId          = {info.id}
                section           = {info.section}
                lessonTitle       = {info.title}
                activityCount     = {info.activityCount}
                sounds            = {this.getSounds()}
                lessonScreen      = {require("screens/lessons/1")}
                autoplayAnimation = {this.props.autoplayAnimation || "instructions"}

                onSubmit={(activity, correct) => 
                    this.save([info.namespace, "activities", activityId, "correct"], correct)
                }

                instructions={(then) => [
                    then("say", "touch-the-word"), then("wait", 250),
                    then("say", "t"),              then("wait", 250),

                    then("uncenterActor"),
                    then("revealChoice", 0),
                    then("say", "words.0"),  then("wait", 250),

                    then("revealChoice", 1),
                    then("say", "words.1"),  then("wait", 250),

                    then("revealChoice", 2),
                    then("say", "words.2"),  then("wait", 250),

                    then("sit")
                ]}

                renderFeedback={(activity) => render(
                    <Feedback
                        lessonId      = {info.id}
                        lessonTitle   = {info.title}
                        activityId    = {activityId}
                        activityCount = {info.activityCount}
                        section       = {info.section}
                        correct       = {activity.isCorrect()}
                        nextScreen    = {nextScreen}
                        word          = {activity.getSelected()[0].word}
                        sounds={{
                            "doesnt-begin": "lessons/lesson-1/activities/feedback/doesnt-begin",
                            "begins-with":  "lessons/lesson-1/activities/feedback/begins-with",
                            "t":            "phonics/activity-phonics/t"
                        }}
                        correctAnimation={(then) => [
                            then("say", "word"),         then("wait", 250),
                            then("say", "begins-with"),  then("wait", 250),
                            then("say", "t")
                        ]}
                        incorrectAnimation={(then) => [
                            then("say", "word"),         then("wait", 250),
                            then("say", "doesnt-begin"), then("wait", 250),
                            then("say", "t")
                        ]}/>
                )}/>
        );
    }
});

module.exports = Lesson1Activity1to3;