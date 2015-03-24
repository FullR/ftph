var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity8 = React.createClass({
    render: function() {
        return (
            <Activity
                id="8"
                choices={[
                    {word: "top"},
                    {word: "tape"},
                    {word: "tub", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson12Activity8;
