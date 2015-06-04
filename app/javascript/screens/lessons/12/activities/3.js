var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "enter"},
                    {word: "otter"},
                    {word: "under", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson12Activity3;
