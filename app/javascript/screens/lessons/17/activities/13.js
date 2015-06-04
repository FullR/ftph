var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "sleep"},
                    {word: "sled"},
                    {word: "slip", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity13;
