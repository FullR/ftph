var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "cat", correct: true},
                    {word: "cut"},
                    {word: "kite"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity1;
