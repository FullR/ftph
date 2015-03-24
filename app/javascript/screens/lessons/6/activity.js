var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    WordImage    = require("components/game-screen/word-image"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson6Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "sounded-word": `lessons/lesson-6/activities/feedback/sounded-words/${this.props.phonics.join("_")}`,
            "listen": "lessons/lesson-6/activities/instructions/listen"
        };
    },

    render: function() {
        var choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            rhymeWord  = this.props.word,
            choices    = this.props.choices,
            phonics    = this.props.phonics;

        return (
            <WordActivity {...this.props}
                lessonId          = {lessonInfo.id}
                section           = {lessonInfo.section}
                lessonTitle       = {lessonInfo.title}
                activityCount     = {lessonInfo.activityCount}
                sounds            = {this.getSounds()}
                teacherText       = "Word Sounds"
                owlText           = "Instructions"
                autoplayAnimation = {this.props.autoplayAnimation || "phonics-only"}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                onOwlClick={(activity) => {
                    if(!activity.isAnimating()) {
                        activity.animate("instructions");
                    }
                }}

                onTeacherClick={(activity) => {
                    if(!activity.isAnimating()) {
                        activity.animate("phonics-only");
                    }
                }}

                animations={{
                    "phonics-only": (then) => [
                        then("changeActor", "teacher"),
                        then("revealActor"),
                        then("say", "sounded-word"),
                        then("wait", 250),
                        ...choices.map((choice, index) => [
                            then("revealChoice", index),
                            then("say", ["words", index]),
                            then("wait", 250)
                        ]),
                        then("sit")
                    ]
                }}

                instructions={(then) => [
                    then("uncenterActor"),
                    then("changeActor", "owl"),
                    then("centerActor"),
                    then("say", "listen"),
                    then("wait", 250),
                    
                    then("say", "sounded-word"),

                    then("wait", 500),
                    then("uncenterActor"),
                    
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),

                    then("sit")
                ]}

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/words"),
                        correct  = activity.isCorrect(),
                        selected = activity.getSelected()[0];

                    render(
                        <Feedback
                            lessonId      = {lessonInfo.id}
                            lessonTitle   = {lessonInfo.title}
                            activityId    = {activityId}
                            activityCount = {lessonInfo.activityCount}
                            section       = {lessonInfo.section}
                            correct       = {correct}
                            nextScreen    = {nextScreen}
                            words         = {[selected.word]}

                            sounds={{
                                "sounded-word":  `lessons/lesson-6/activities/feedback/sounded-words/${phonics.join("_")}`,
                                "does-not-make": "lessons/lesson-6/activities/feedback/does-not-make"
                            }}

                            correctAnimation={(then) => [
                                then("say", "sounded-word"),
                                then("wait", 250),
                                then("say", "words.0")
                            ]}

                            incorrectAnimation={(then) => [
                                then("say", "sounded-word"),
                                then("say", "does-not-make"),
                                then("say", "words.0")
                            ]}/>
                    );
                }}/>
        );
    }
});

module.exports = Lesson6Activity;