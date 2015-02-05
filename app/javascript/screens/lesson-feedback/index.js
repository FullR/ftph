"use strict";

var React       = require("react"),
    AdminButton = require("components/admin-button"),
    render      = require("render"),
    GameScreen  = require("screens/game-screen");

/*
    Props:
        title: String
        lessonId: String
        section: String
        correct: int
        total: int
        nextScreen: Component
        backScreen: Component
*/
var LessonFeedback = React.createClass({
    next: function() {
        var Next = this.props.nextScreen;
        render(<Next />);
    },

    back: function() {
        var Back = this.props.backScreen;
        render(<Back />);
    },

    render: function() {
        var percent = Math.floor((this.props.correct / this.props.total) * 100);
        return (
            <GameScreen className='lesson-feedback'>
                <h1>{this.props.title} Complete!</h1>
                <h2>Lesson {this.props.lessonId}</h2>
                <p className='score'>
                    Score {percent}%
                    <br/>
                    {this.props.correct}/{this.props.total}
                </p>
                {percent >= 85 ?
                    <div className='lesson-feedback-next' onClick={this.next}><button></button></div> :
                    <div className='lesson-feedback-prev' onClick={this.back}><button></button></div>
                }
                <AdminButton section={this.props.section}/>
            </GameScreen>
        );
    }
});

module.exports = LessonFeedback;