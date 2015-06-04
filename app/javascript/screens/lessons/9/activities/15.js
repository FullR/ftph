var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "drip"},
                    {word: "drop"},
                    {word: "dress", correct: true}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson9Activity15;
