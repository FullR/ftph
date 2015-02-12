var React       = require("react"),
    Teacher     = require("components/game-screen/teacher"),
    WordImage   = require("components/game-screen/word-image"),
    Info        = require("components/game-screen/info"),
    AdminButton = require("components/admin/admin-button"),
    GameScreen  = require("screens/game-screen"),
    render      = require("render");

var ActivityFeedback = React.createClass({
    mixins: [
        require("mixins/sound-container"),
        require("mixins/animation"),
        require("mixins/animation-utility/actor")("teacher")
    ],

    getInitialState: function() {
        return {
            teacher: {
                state:    "speaking-closed",
                hidden:   false,
                centered: false
            },
            hidingContinueButton: !this.props.correct
        };
    },

    hideContinueButton: function() {
        this.state.hidingContinueButton = true;
        this.setState(this.state);
    },

    showContinueButton: function() {
        this.state.hidingContinueButton = false;
        this.setState(this.state);
    },

    getSounds: function() {
        if(this.props.correct) {
            return {
                "applause": "common/applause"
            };
        }
        else {
            return {};
        }
    },

    getAutoplayAnimation: function() {
        return this.props.correct ? "correctAnimation" : "incorrectAnimation";
    },

    correctAnimation: function(then) {
        var steps;
        if(this.props.correctAnimation) {
            steps = this.props.correctAnimation.call(this, then);
            steps.unshift(then("play", "applause"));
        }
        else {
            steps = [then("play", "applause")];
        }
        return steps;
    },

    incorrectAnimation: function(then) {
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

    renderNextScreen: function() {
        var Next;
        if(this.props.nextScreen) {
            Next = this.props.nextScreen;
            render(<Next />);
        }
    },

    render: function() {
        return (
            <GameScreen className='activity-feedback'>
                <Teacher {...this.state.teacher} onClick={this.animationCallback(this.getAutoplayAnimation())}/>
                {this.props.children}
                {this.state.hidingContinueButton ? null :
                    <div className='activity-feedback__arrow' onClick={this.props.renderNextScreen || this.renderNextScreen}/>
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