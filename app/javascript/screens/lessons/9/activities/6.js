var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity6 = React.createClass({
    render: function() {
        return (
            <Activity
                id="6"
                choices={[
                    {word: "cap", correct: true},
                    {word: "cup"},
                    {word: "cape"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson8Activity6;
