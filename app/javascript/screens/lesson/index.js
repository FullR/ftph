var _           = require("lodash"),
    React       = require("react"),
    Title       = require("components/lesson/title"),
    Arrow       = require("components/lesson/arrow"),
    AdminButton = require("components/admin-button"),
    Owl         = require("components/owl"),
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
    autoplayAnimation: "instructions",

    propTypes: {
        id: React.PropTypes.string.isRequired
    },

    componentWillMount: function() {
        this.save("last-lesson", this.props.id);
    },

    getInitialState: function() {
        return {
            owl: {
                state: "sitting",
                hidden: true
            },

            choices: _.cloneDeep(this.props.choices)
        };
    },

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

    render: function() {
        return (
            <GameScreen className={this.classNames("lesson")} section={this.props.section}>
                <Title title={this.props.title} subtitle={this.props.subtitle} />

                <Owl {...this.state.owl} onClick={this.animationCallback("instructions")}>Lesson</Owl>

                <Arrow next={this.props.nextScreen}>
                    {this.props.nextLabel}
                </Arrow>

                <div className='choice-group'>{this.state.choices.map(this.props.renderChoice.bind(null, this))}</div>
                
                {this.props.children}
            </GameScreen>
        );
    }
});

module.exports = Lesson;