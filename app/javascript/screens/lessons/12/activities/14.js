var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                choices={[
                    {word: "lunch", correct: true},
                    {word: "launch"},
                    {word: "blond"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson12Activity14;
