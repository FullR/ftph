var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "milk", correct: true},
                    {word: "spill"},
                    {word: "talk", correct: true}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson3Activity18;