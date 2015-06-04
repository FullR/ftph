var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "lip"},
                    {word: "leap"},
                    {word: "lap", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson8Activity8;
