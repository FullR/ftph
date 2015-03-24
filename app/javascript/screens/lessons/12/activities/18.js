var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity18 = React.createClass({
    render: function() {
        return (
            <Activity
                id="18"
                choices={[
                    {word: "mud", correct: true},
                    {word: "mad"},
                    {word: "mitt"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson12Activity18;
