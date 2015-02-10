var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "hand", correct: true},
                    {word: "desk"},
                    {word: "yard", correct: true}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson3Activity19;