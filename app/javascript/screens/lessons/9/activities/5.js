var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity5 = React.createClass({
    render: function() {
        return (
            <Activity
                id="5"
                choices={[
                    {word: "hit"},
                    {word: "hot"},
                    {word: "hat", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson8Activity5;
