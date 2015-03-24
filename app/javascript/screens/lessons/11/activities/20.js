var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity20 = React.createClass({
    render: function() {
        return (
            <Activity
                id="20"
                choices={[
                    {word: "sax"},
                    {word: "socks", correct: true},
                    {word: "six"}
                ]}
                nextScreen={require("screens/lessons/11/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson11Activity20;
