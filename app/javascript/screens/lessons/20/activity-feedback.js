var React = require("react");
var Feedback = require("screens/activity-feedback");
var FeedbackGroup = require("components/activity-feedback/feedback-group");
var info = require("./info");

var Lesson20ActivityFeedback = React.createClass({
    render: function() {
        return (
            <Feedback {...this.props}
                lessonId={info.id}
                lessonTitle={info.title}
                activityCount={info.activityCount}
                section={info.section}
                sounds={{
                    "letter": `common/activities/letters/${this.props.letter}`,
                    "phonic": `phonics/activity-phonics/${this.props.phonic}`,
                    "selected-phonic": `phonics/activity-phonics/${this.props.letter + "h"}`,
                    "targetWord": `words/activity-words/${this.props.targetWord}`,
                    "correct": "lessons/lesson-20/feedback/correct",
                    "makes-the": "lessons/lesson-20/feedback/makes-the",
                    "doesnt-make": "lessons/lesson-20/feedback/doesnt-make",
                    "sound-so-it": "lessons/lesson-20/feedback/sound-so-it",
                    "sound-so-it-doesnt-have-a": "lessons/lesson-20/feedback/sound-so-it-doesnt-have-a",
                    "sound-in": "lessons/lesson-20/feedback/sound-in",
                    "in-it": "lessons/lesson-20/feedback/in-it"
                }}
                correctAnimation={(then) => [
                    then("say", "correct"),
                    then("say", "letter"),
                    then("say", "makes-the"),
                    then("say", "phonic"),
                    then("say", "sound-in"),
                    then("say", "targetWord")
                ]}
                incorrectAnimation={(then) => [
                    then("say", "targetWord"),
                    then("say", "doesnt-make"),
                    then("say", "selected-phonic"),
                    (this.props.letter === "u" ? 
                        then("say", "sound-so-it-doesnt-have-a") : 
                        then("say", "sound-so-it")
                    ),
                    then("say", "letter"),
                    then("say", "in-it")
                ]}>
                <div style={{
                    position: "absolute",
                    top: "25%",
                    width: "100%",
                    textAlign: "center"
                }}>
                    <FeedbackGroup correct={this.props.correct} style={{display: "inline-block"}}>
                        <span style={{fontSize: 200}}>{this.props.letter}</span>
                    </FeedbackGroup>
                </div>
            </Feedback>
        );
    }
});

module.exports = Lesson20ActivityFeedback;