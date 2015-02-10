var React       = require("react"),
    _           = require("lodash"),
    truthy      = require("utility/functional/truthy"),
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
    mixins: [require("mixins/storage")],
    propTypes: {
        lessonId: React.PropTypes.string.isRequired
    },

    loadLesson: function() {
        return this.load("lesson-"+this.props.lessonId) || {};
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

        this.save(this.props.lessonId, storage);
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
                <h1>{this.props.title} Complete!</h1>
                <h2>Lesson {this.props.lessonId}</h2>
                <p className='score'>
                    Score {percent}%
                    <br/>
                    {score}/{total}
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