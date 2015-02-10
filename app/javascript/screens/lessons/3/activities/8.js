var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "violin", correct: true},
                    {word: "fin"},
                    {word: "vase", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson3Activity8;