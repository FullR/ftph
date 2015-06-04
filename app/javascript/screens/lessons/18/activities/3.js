var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "rock", correct: true},
                    {word: "rack"},
                    {word: "wreck"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson18Activity3;
