var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "dust"},
                    {word: "desk", correct: true},
                    {word: "dish"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson9Activity14;
