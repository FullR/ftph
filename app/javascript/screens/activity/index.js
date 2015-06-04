var _ = require("lodash");
var React = require("react");
var AdminButton = require("components/admin/admin-button");
var Teacher = require("components/game-screen/teacher");
var Owl = require("components/game-screen/owl");
var Info = require("components/game-screen/info");
var GameScreen = require("screens/game-screen");
var get = require("utility/functional/get");
var negate = require("utility/functional/negate");
var render = require("render");


var Activity = React.createClass({
    mixins: [
        require("mixins/storage"),                            // load/save methods
        require("mixins/sound-container"),                    // Manage sounds
        require("mixins/animation"),                          // Manage playing/stopping animations
        require("mixins/animations/choices-only"),            // Very common animation
        require("mixins/animation-utility/choices"),          // Utility methods for animating choices
        require("mixins/animation-utility/actor")("teacher"), // Utility methods for animating actor
        require("mixins/class-names")
    ],

    propTypes: {
        id:            React.PropTypes.string.isRequired,
        lessonId:      React.PropTypes.string.isRequired,
        lessonTitle:   React.PropTypes.string.isRequired,
        activityCount: React.PropTypes.string.isRequired,
        section:       React.PropTypes.string.isRequired
    },

    // Lifecycle methods
    getInitialState() {
        return {
            teacher: {
                state: "sitting",
                hidden: true
            },

            owl: {
                state: "sitting",
                hidden: false
            },

            choices: (this.loadChoices() || this.props.choices).map((choice) => {
                choice.hidden = true;
                return choice;
            })
        };
    },

    componentWillMount() {
        this.saveLastScreen();
        this.saveLastLesson();
    },

    componentDidUpdate() {
        if(this.shouldShowFeedback()) {
            this.props.renderFeedback.call(null, this);
        }
    },

    // Component methods
    getAutoplayAnimation() {
        return this.props.playFullInstructions ? "instructions" : (this.props.autoplayAnimation || "instructions");
    },

    getCorrectWords() {
        return this.state.choices
            .filter(get("correct"))
            .map(get("word"));
    },

    getIncorrectWords() {
        return this.state.choices
            .filter((choice) => !choice.correct)
            .map(get("word"));
    },

    getNamespace() {
        return [`lesson-${this.props.lessonId}`, "activities", this.props.id];
    },

    getSelected() {
        return this.state.choices.filter(get("selected"));
    },

    getUnselected() {
        return this.state.choices.filter((choice) => !choice.selected);
    },

    getSounds() {
        return this.props.sounds || {};
    },

    instructions(then) {
        var steps;
        if(this.props.instructions) {
            steps = this.props.instructions.call(this, then);

            return [
                then("revealActor"), 
                then("centerActor"), 
                then("hideChoices"),
                ...steps
            ];
        }
        else {
            return [then("revealActor")];
        }
    },

    isCorrect() {
        return this.getSelected().every(get("correct"));
    },

    loadChoices() {
        return this.load([...this.getNamespace(), "choices"]);
    },

    saveLastLesson() {
        // if this activity is part of a sublesson, 
        // mark that subless as the last lesson
        if(this.props.sublessonId) {
            this.save("last-lesson", this.props.sublessonId);
        }
        else {
            this.save("last-lesson", this.props.lessonId);
        }
    },

    saveChoices() {
        // The namespace consists of multiple parts, so it needs
        // to be spread into the path
        this.save([...this.getNamespace(), "choices"], this.state.choices);
    },

    saveLastScreen() {
        this.save(["lesson-"+this.props.lessonId, "last-screen"], this.props.id);
        this.save(["lesson-"+this.props.lessonId, "last-activity"], this.props.id);
        if(this.props.sublessonId) {
            this.save(["lesson-"+this.props.sublessonId, "last-screen"], this.props.id);
            this.save(["lesson-"+this.props.sublessonId, "last-activity"], this.props.id);
        }
    },

    selectChoice(choice) {
        choice.selected = !choice.selected;
        this.setState(this.state);
        if(this.shouldShowFeedback()) {
            this.saveChoices();
            this.save(["lesson-"+this.props.lessonId, "activities", this.props.id, "correct"], this.isCorrect());
        }
    },

    shouldShowFeedback() {
        return this.getSelected().length >= (this.props.requiredSelectionCount || 1);
    },

    // Render methods
    renderLesson() {
        var Lesson;
        if(this.props.renderLesson) {
            this.props.renderLesson();
        }
        else if(this.props.lessonScreen) {
            Lesson = this.props.lessonScreen;
            render(<Lesson />);
        }
    },

    render() {
        var {
            onOwlClick,
            onTeacherClick,
            lessonId,
            lessonTitle,
            id,
            activityCount,
            section,
            children
        } = this.props;

        return (
            <GameScreen {...this.props} className={this.classNames("activity", this.state.animating ? "activity-animating" : null)}>
                <Owl {...this.state.owl} 
                    onClick={onOwlClick ? onOwlClick.bind(null, this) : this.renderLesson}>
                    {this.props.owlText || "Lesson"}
                </Owl>

                <Teacher {...this.state.teacher} 
                    onClick={onTeacherClick ? onTeacherClick.bind(null, this) : this.animationCallback("instructions")}>
                    {this.props.teacherText || "Instructions"}
                </Teacher>

                {children}

                <div className="choice-group">
                    {this.state.choices.map(this.props.renderChoice.bind(null, this))}
                </div>

                <Info 
                    lessonId={lessonId}
                    lessonTitle={lessonTitle}
                    activityId={id}
                    activityCount={activityCount}/>

                <AdminButton section={section}/>
            </GameScreen>
        );
    }
});

module.exports = Activity;