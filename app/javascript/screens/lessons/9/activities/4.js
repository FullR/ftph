var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity4 = React.createClass({
    render: function() {
        return (
            <Activity
                id="4"
                choices={[
                    {word: "mud"},
                    {word: "mad", correct: true},
                    {word: "mitt"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson8Activity4;
