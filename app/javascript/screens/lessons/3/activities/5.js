var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "reading", correct: true},
                    {word: "bear"},
                    {word: "rose", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson3Activity5;