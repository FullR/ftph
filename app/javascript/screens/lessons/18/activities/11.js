var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "drip"},
                    {word: "drop", correct: true},
                    {word: "dress"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson18Activity11;
