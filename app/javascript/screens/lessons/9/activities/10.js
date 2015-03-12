var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "bed"},
                    {word: "bud"},
                    {word: "bag", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson8Activity10;
