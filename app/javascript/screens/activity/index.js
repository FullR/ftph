"use strict";

var _           = require("lodash"),
    React       = require("react"),
    AdminButton = require("components/admin-button"),
    Teacher     = require("components/teacher"),
    Owl         = require("components/owl"),
    Info        = require("components/activity/info"),
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

    getNamespace: function() {
        return "lesson-"+this.props.lessonId+".activities."+this.props.id;
    },

    saveChoices: function() {
        this.save(this.getNamespace()+".choices", this.state.choices);
    },

    loadChoices: function() {
        return this.load(this.getNamespace()+".choices");
    },

    getAutoplayAnimation: function() {
        return this.props.autoplayAnimation || "instructions";
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

    componentDidUpdate: function() {
        if(this.shouldShowFeedback()) {
            this.props.renderFeedback.call(null, this);
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

    render: function() {
        return (
            <GameScreen className={this.classNames("activity")}>
                <Owl onClick={render.bind(null, this.props.lessonScreen)} state="sitting"/>

                <Teacher {...this.state.teacher} onClick={this.animationCallback("instructions")} />

                {this.props.children}

                <div className='choices'>{this.state.choices.map(this.props.renderChoice.bind(null, this))}</div>

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