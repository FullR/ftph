var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity1 = React.createClass({
    render: function() {
        return (
            <Activity
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "egg"},
                    {word: "apple", correct: true},
                    {word: "ill"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson8Activity1;
