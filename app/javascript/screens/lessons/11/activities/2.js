var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "in"},
                    {word: "on", correct: true},
                    {word: "out"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson11Activity2;
