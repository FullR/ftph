var React = require("react");
var WordActivity = require("screens/activity/word");
var Feedback = require("./activity-feedback");
var lessonInfo = require("./info");
var render = require("render");
var WordImage = require("components/game-screen/word-image");
var DraggableLetter = require("components/activity/draggable-letter");
var Choice = require("components/game-screen/choice");
var LetterDropZone = require("components/game-screen/letter-drop-zone");

var Lesson20Activity = React.createClass({
    mixins: [require("mixins/storage")],

    renderChoice: function(activity, choice, index) {
        return null;
    },

    submit: function(letter) {
        this.refs.activity.selectChoice(letter.choice);
    },

    render: function() {
        var activityId = this.props.id;
        var nextScreen = this.props.nextScreen;
        var choices = this.props.choices;
        var letterContainerStyle = {
            position: "absolute",
            top: "10%",
            width: "100%",
            height: 200,
            textAlign: "center"
        };
        var dropZoneStyle = {
            display: "inline-block",
            height: "100%",
            width: 200
        };

        return (
            <WordActivity {...this.props} ref="activity"
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/20")}
                autoplayAnimation={this.props.autoplayAnimation || "instructions"}
                choices={this.props.choices}
                sounds={{
                    "phonic": `phonics/activity-phonics/${this.props.phonic}`,
                    "drag-the": "lessons/lesson-20/activity/drag-the",
                    "sound-in": "lessons/lesson-20/activity/sound-in",
                    "target-word": `words/activity-words/${this.props.targetWord}`
                }}
                instructions={(then) => [
                    then("uncenterActor"),
                    then("say", "drag-the"),
                    then("say", "phonic"),
                    then("say", "sound-in"),
                    then("say", "target-word"),
                    ...choices.map((choice, index) =>
                        then("revealChoice", index)
                    ),
                    then("sit")
                ]}
                renderFeedback={(activity) => render(
                    <Feedback
                        correct={activity.isCorrect()}
                        activityId={activityId}
                        nextScreen={nextScreen}
                        targetWord={this.props.targetWord}
                        letter={activity.getSelected()[0].letter}
                        phonic={this.props.phonic}/>
                )}
                renderChoice={this.renderChoice}>
                <div style={letterContainerStyle}>
                    {this.props.choices.map((letter) =>
                        <DraggableLetter key={letter.letter} {...letter} choice={letter}/>
                    )}
                </div>

                <div className="choice-group">
                    <Choice path={`words/activity-words/${this.props.targetWord}`}>
                        <LetterDropZone onLetterDrop={this.submit} style={dropZoneStyle}>
                            <WordImage word={this.props.targetWord}/>
                        </LetterDropZone>
                    </Choice>
                </div>
            </WordActivity>
        );
    }
});

module.exports = Lesson20Activity;
