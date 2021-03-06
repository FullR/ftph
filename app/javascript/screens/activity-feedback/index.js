var React = require("react");
var Teacher = require("components/game-screen/teacher");
var WordImage = require("components/game-screen/word-image");
var Info = require("components/game-screen/info");
var AdminButton = require("components/admin/admin-button");
var GameScreen = require("screens/game-screen");
var render = require("render");

var ActivityFeedback = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/sound-container"),
        require("mixins/animation"),
        require("mixins/animation-utility/actor")("teacher")
    ],

    propTypes: {
        lessonId: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            teacher: {
                state:    "speaking-closed",
                hidden:   false,
                centered: false
            },
            hidingContinueButton: !this.props.correct
        };
    },

    hideContinueButton() {
        this.state.hidingContinueButton = true;
        this.setState(this.state);
    },

    showContinueButton() {
        this.state.hidingContinueButton = false;
        this.setState(this.state);
    },

    getSounds() {
        if(this.props.correct) {
            return {
                "applause": "common/applause"
            };
        }
        else {
            return {};
        }
    },

    getAutoplayAnimation() {
        return this.props.correct ? "correctAnimation" : "incorrectAnimation";
    },

    correctAnimation(then) {
        var steps;
        if(this.props.correctAnimation) {
            steps = [
                then("play", "applause"), 
                ...this.props.correctAnimation.call(this, then)
            ];
        }
        else {
            steps = [then("play", "applause")];
        }
        return steps;
    },

    incorrectAnimation(then) {
        var steps;
        if(this.props.incorrectAnimation) {
            steps = this.props.incorrectAnimation.call(this, then);
            steps.push(then("showContinueButton"));
        }
        else {
            steps = [then("showContinueButton")];
        }
        return steps;
    },

    renderNextScreen() {
        var NextScreen = this.props.nextScreen;
        if(NextScreen) {
            render(<NextScreen />);
        }
    },

    render() {
        return (
            <GameScreen className="activity-feedback">
                <Teacher {...this.state.teacher} onClick={this.animationCallback(this.getAutoplayAnimation())}/>
                {this.props.children}
                {this.state.hidingContinueButton ? null :
                    <div className="activity-feedback__arrow" onClick={this.props.renderNextScreen || this.renderNextScreen}/>
                }
                <Info 
                    lessonId={this.props.lessonId}
                    lessonTitle={this.props.lessonTitle}
                    activityId={this.props.activityId}
                    activityCount={this.props.activityCount}/>

                <AdminButton section={this.props.section}/>
            </GameScreen>
        );
    }
});

module.exports = ActivityFeedback;