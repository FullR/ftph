var React = require("react");
var _ = require("lodash");
var truthy = require("utility/functional/truthy");
var AdminButton = require("components/admin/admin-button");
var render = require("render");
var GameScreen = require("screens/game-screen");
var Sound = require("components/utility/sound");

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
    mixins: [
        require("mixins/storage")
    ],
    propTypes: {
        lessonId: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        section: React.PropTypes.string.isRequired,
    },

    // Lifecycle methods
    componentWillMount() {
        this.clearLessonStorage();
    },

    // Component Methods

    // Reset last activity for lesson 1 and its sublessons
    clearLessonStorage() {
        var storage = this.loadLesson();
        
        if(storage.activities) {
            _.each(storage.activities, function(activity) {
                activity.choices = null;
            });
        }

        _.extend(storage, {
            "last-screen": "feedback",
            "last-activity": null,
            "score":       this.getScore()
        });

        this.save("last-lesson", this.props.lessonId);
        this.save(this.getNamespace(), storage);
    },
    
    getActivities() {
        return _.values(this.loadLesson().activities);
    },

    getNamespace() {
        return `lesson-${this.props.lessonId}`;
    },

    getScore() {
        return _.pluck(this.getActivities(), "correct").filter(truthy).length;
    },

    getTotal() {
        return this.getActivities().length;
    },

    loadLesson() {
        return this.load(this.getNamespace()) || {};
    },

    // Render methods
    renderNext() {
        var Next = this.props.nextScreen,
            storage = this.loadLesson();

        _.extend(storage, {
            "completed": true,
            "last-screen": null,
            "last-activity": null
        });

        this.save(this.getNamespace(), storage);
        render(<Next />);
    },

    renderPrevious() {
        var Back = this.props.backScreen;
        render(<Back />);
    },

    didPass() {
        return this.getPercent() >= (this.props.requiredPercent || 85);
    },

    getPercent() {
        return Math.floor((this.getScore() / this.getTotal()) * 100);
    },

    // Render methods
    render() {
        var passed = this.didPass(),
            score = this.getScore(),
            total = this.getTotal(),
            percent = this.getPercent();

        return (
            <GameScreen className="lesson-feedback">
                {passed ? 
                    <Sound path="common/applause" autoplay={true}/> :
                    null
                }
                <h1 className="lesson-feedback__title">{this.props.title} Complete!</h1>
                <h2 className="lesson-feedback__subtitle">Lesson {this.props.lessonId}</h2>
                <p className="lesson-feedback__score">
                    Score {percent}%
                    <br/>
                    {score}/{total}
                </p>
                {this.didPass() ?
                    <button className="lesson-feedback__next-button" onClick={this.renderNext}></button> :
                    <button className="lesson-feedback__prev-button" onClick={this.renderPrevious}></button>
                }
                <AdminButton/>
            </GameScreen>
        );
    }
});

module.exports = LessonFeedback;