var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "drop", correct: true},
                    {word: "drip"},
                    {word: "droop"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson11Activity12;
