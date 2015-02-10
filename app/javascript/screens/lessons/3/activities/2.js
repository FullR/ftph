var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "box", correct: true},
                    {word: "socks"},
                    {word: "boy", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson3Activity2;