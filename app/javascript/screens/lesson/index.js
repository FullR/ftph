var _           = require("lodash"),
    React       = require("react"),
    Title       = require("components/lesson/title"),
    Arrow       = require("components/lesson/arrow"),
    AdminButton = require("components/admin/admin-button"),
    Owl         = require("components/game-screen/owl"),
    GameScreen  = require("screens/game-screen");


var Lesson = React.createClass({
    mixins: [
        require("mixins/storage"),                       // load/save methods
        require("mixins/sound-container"),               // Manage sounds
        require("mixins/animation"),                     // Manage playing/stopping animations
        require("mixins/animation-utility/choices"),     // Utility methods for animating choices
        require("mixins/animation-utility/actor")("owl"), // Utility methods for animating actor
        require("mixins/class-names")
    ],
    propTypes: {
        id: React.PropTypes.string.isRequired
    },
    autoplayAnimation: "instructions",

    // Lifecycle methods
    getInitialState: function() {
        return {
            owl: {
                state: "sitting",
                hidden: true
            },
            choices: _.cloneDeep(this.props.choices).map((choice) => {
                choice.hidden = true;
                return choice;
            })
        };
    },

    componentWillMount: function() {
        this.save("last-lesson", this.props.id);
        this.save(["lesson-"+this.props.id, "last-screen"], null);
        this.save(["lesson-"+this.props.id, "completed"], false);
    },

    // Component methods
    instructions: function(then) {
        var steps;
        if(this.props.instructions) {
            steps = this.props.instructions.call(this, then);
            [then("revealActor"), then("centerActor"), then("hideChoices")].forEach(steps.unshift.bind(steps));
            return steps;
        }
        else {
            return [];
        }
    },

    // Render methods
    render: function() {
        return (
            <GameScreen className={this.classNames("lesson")} section={this.props.section}>
                <Title title={this.props.title} subtitle={this.props.subtitle} />

                <Owl {...this.state.owl} onClick={this.animationCallback("instructions")}>Lesson</Owl>

                <Arrow next={this.props.nextScreen}>
                    {this.props.nextLabel}
                </Arrow>

                <div className="choice-group">{this.state.choices.map(this.props.renderChoice.bind(null, this))}</div>
                
                {this.props.children}
            </GameScreen>
        );
    }
});

module.exports = Lesson;