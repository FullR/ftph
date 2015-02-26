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

    getInitialState: function() {
        return {
            teacher: {
                state: "sitting",
                hidden: true
            },

            choices: this.loadChoices() || _.cloneDeep(this.props.choices)
        };
    },

    saveLastScreen: function() {
        this.save(["lesson-"+this.props.lessonId, "last-screen"], this.props.id);
        this.save(["lesson-"+this.props.lessonId, "last-activity"], this.props.id);
        if(this.props.sublessonId) {
            this.save(["lesson-"+this.props.sublessonId, "last-screen"], this.props.id);
            this.save(["lesson-"+this.props.sublessonId, "last-activity"], this.props.id);
        }
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

    componentDidUpdate: function() {
        if(this.shouldShowFeedback()) {
            this.props.renderFeedback.call(null, this);
        }
    },

    componentWillMount: function() {
        this.saveLastScreen();
        this.saveLastLesson();
    },

    getNamespace: function() {
        return [`lesson-${this.props.lessonId}`, "activities", this.props.id];
    },

    saveChoices: function() {
        // The namespace consists of multiple parts, so it needs
        // to be spread into the path
        this.save([...this.getNamespace(), "choices"], this.state.choices);
    },

    loadChoices: function() {
        return this.load([...this.getNamespace(), "choices"]);
    },

    getAutoplayAnimation: function() {
        return this.props.autoplayAnimation || "instructions";
    },


    instructions: function(then) {
        var steps;
        if(this.props.instructions) {
            steps = this.props.instructions.call(this, then);
            // steps that always come first
            [
                then("revealActor"), 
                then("centerActor"), 
                then("hideChoices")
            ].forEach(steps.unshift.bind(steps));
            return steps;
        }
        else {
            return [then("revealActor")];
        }
    },

    getSounds: function() {
        return this.props.sounds || {};
    },

    getSelected: function() {
        return this.state.choices.filter(get("selected"));
    },

    shouldShowFeedback: function() {
        return this.getSelected().length >= (this.props.requiredSelectionCount || 1);
    },

    isCorrect: function() {
        return this.getSelected().every(get("correct"));
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
                <Owl onClick={this.renderLesson} state="sitting">Lesson</Owl>

                <Teacher {...this.state.teacher} onClick={this.animationCallback("instructions")}>Instructions</Teacher>

                {this.props.children}

                <div className="choice-group">{this.state.choices.map(this.props.renderChoice.bind(null, this))}</div>

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