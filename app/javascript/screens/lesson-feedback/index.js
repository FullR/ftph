var React       = require("react"),
    _           = require("lodash"),
    truthy      = require("utility/functional/truthy"),
    AdminButton = require("components/admin/admin-button"),
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
    mixins: [require("mixins/storage")],
    propTypes: {
        lessonId: React.PropTypes.string.isRequired
    },

    getNamespace: function() {
        return `lesson-${this.props.lessonId}`;
    },

    loadLesson: function() {
        return this.load(this.getNamespace()) || {};
    },

    getActivities: function() {
        return _.values(this.loadLesson().activities);
    },

    getScore: function() {
        return _.pluck(this.getActivities(), "correct").filter(truthy).length;
    },

    getTotal: function() {
        return this.getActivities().length;
    },

    next: function() {
        var Next = this.props.nextScreen;
        render(<Next />);
    },

    back: function() {
        var Back = this.props.backScreen;
        render(<Back />);
    },

    // Reset last activity for lesson 1 and its sublessons
    clearLessonStorage: function() {
        var storage = this.loadLesson();
        
        if(storage.activities) {
            _.each(storage.activities, function(activity) {
                activity.choices = null;
            });
        }

        _.extend(storage, {
            "last-screen": null,
            "completed":   true,
            "score":       this.getScore()
        });

        this.save(this.getNamespace(), storage);
    },

    componentWillMount: function() {
        this.clearLessonStorage();
    },

    render: function() {
        var score = this.getScore(),
            total = this.getTotal(),
            percent = Math.floor((score / total) * 100);

        return (
            <GameScreen className='lesson-feedback'>
                <h1 className='lesson-feedback__title'>{this.props.title} Complete!</h1>
                <h2 className='lesson-feedback__subtitle'>Lesson {this.props.lessonId}</h2>
                <p className='lesson-feedback__score'>
                    Score {percent}%
                    <br/>
                    {score}/{total}
                </p>
                {percent >= 85 ?
                    <button className='lesson-feedback__next-button' onClick={this.next}></button> :
                    <button className='lesson-feedback__prev-button' onClick={this.back}></button>
                }
                <AdminButton/>
            </GameScreen>
        );
    }
});

module.exports = LessonFeedback;