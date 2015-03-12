var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "bug"},
                    {word: "bag"},
                    {word: "beg", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson9Activity10;
