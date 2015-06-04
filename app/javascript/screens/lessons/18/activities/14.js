var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                choices={[
                    {word: "stop", correct: true},
                    {word: "step"},
                    {word: "strap"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson18Activity14;
