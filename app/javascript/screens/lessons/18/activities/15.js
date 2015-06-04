var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "stomp", correct: true},
                    {word: "stamp"},
                    {word: "stump"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson18Activity15;
