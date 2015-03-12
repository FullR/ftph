var _           = require("lodash"),
    React       = require("react"),
    AdminButton = require("components/admin/admin-button"),
    Teacher     = require("components/game-screen/teacher"),
    Owl         = require("components/game-screen/owl"),
    Info        = require("components/game-screen/info"),
    GameScreen  = require("screens/game-screen"),
    get         = require("utility/functional/get"),
    negate      = require("utility/functional/negate"),
    render      = require("render");


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
        id: React.PropTypes.string.isRequired,
        lessonId: React.PropTypes.string.isRequired
    },

    // Lifecycle methods
    getInitialState: function() {
        return {
            teacher: {
                state: "sitting",
                hidden: true
            },

            owl: {
                state: "sitting",
                hidden: false
            },

            choices: (this.loadChoices() || _.cloneDeep(this.props.choices)).map((choice) => {
                choice.hidden = true;
                return choice;
            })
        };
    },

    componentWillMount: function() {
        this.saveLastScreen();
        this.saveLastLesson();
    },

    componentDidUpdate: function() {
        if(this.shouldShowFeedback()) {
            this.props.renderFeedback.call(null, this);
        }
    },

    // Component methods
    getAutoplayAnimation: function() {
        return this.props.autoplayAnimation || "instructions";
    },

    getNamespace: function() {
        return [`lesson-${this.props.lessonId}`, "activities", this.props.id];
    },

    getSelected: function() {
        return this.state.choices.filter(get("selected"));
    },

    getSounds: function() {
        return this.props.sounds || {};
    },

    instructions: function(then) {
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

    isCorrect: function() {
        return this.getSelected().every(get("correct"));
    },

    loadChoices: function() {
        return this.load([...this.getNamespace(), "choices"]);
    },

    saveLastLesson: function() {
        // if this activity is part of a sublesson, 
        // mark that subless as the last lesson
        if(this.props.sublessonId) {
            this.save("last-lesson", this.props.sublessonId);
        }
        else {
            this.save("last-lesson", this.props.lessonId);
        }
    },

    saveChoices: function() {
        // The namespace consists of multiple parts, so it needs
        // to be spread into the path
        this.save([...this.getNamespace(), "choices"], this.state.choices);
    },

    saveLastScreen: function() {
        this.save(["lesson-"+this.props.lessonId, "last-screen"], this.props.id);
        this.save(["lesson-"+this.props.lessonId, "last-activity"], this.props.id);
        if(this.props.sublessonId) {
            this.save(["lesson-"+this.props.sublessonId, "last-screen"], this.props.id);
            this.save(["lesson-"+this.props.sublessonId, "last-activity"], this.props.id);
        }
    },

    selectChoice: function(choice) {
        choice.selected = !choice.selected;
        this.setState(this.state);
        if(this.shouldShowFeedback()) {
            this.saveChoices();
            if(this.props.onSubmit) {
                this.props.onSubmit(this, this.isCorrect());
            }
        }
    },

    shouldShowFeedback: function() {
        return this.getSelected().length >= (this.props.requiredSelectionCount || 1);
    },

    // Render methods
    renderLesson: function() {
        var Lesson;
        if(this.props.renderLesson) {
            this.props.renderLesson();
        }
        else if(this.props.lessonScreen) {
            Lesson = this.props.lessonScreen;
            render(<Lesson />);
        }
    },

    render: function() {
        return (
            <GameScreen className={this.classNames("activity")}>
                <Owl {...this.state.owl} 
                    onClick={this.props.onOwlClick || this.renderLesson}>
                    Lesson
                </Owl>

                <Teacher {...this.state.teacher} 
                    onClick={this.animationCallback("instructions")}>
                    Instructions
                </Teacher>

                {this.props.children}

                <div className="choice-group">
                    {this.state.choices.map(this.props.renderChoice.bind(null, this))}
                </div>

                <Info 
                    lessonId={this.props.lessonId}
                    lessonTitle={this.props.lessonTitle}
                    activityId={this.props.id}
                    activityCount={this.props.activityCount}/>

                <AdminButton section={this.props.section}/>
            </GameScreen>
        );
    }
});

module.exports = Activity;