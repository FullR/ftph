var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity13 = React.createClass({
    render: function() {
        return (
            <Activity
                id="13"
                choices={[
                    {word: "shut"},
                    {word: "shot", correct: true},
                    {word: "sheet"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson11Activity13;
