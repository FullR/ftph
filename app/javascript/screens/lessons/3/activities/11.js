var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "swing", correct: true},
                    {word: "ice"},
                    {word: "stick", correct: true}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson3Activity11;