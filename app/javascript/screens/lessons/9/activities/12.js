var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity12 = React.createClass({
    render: function() {
        return (
            <Activity
                id="12"
                choices={[
                    {word: "slap", correct: true},
                    {word: "slip"},
                    {word: "sleep"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson8Activity12;
