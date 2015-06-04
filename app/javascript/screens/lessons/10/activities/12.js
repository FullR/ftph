var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "Bob"},
                    {word: "Bill", correct: true},
                    {word: "Ben"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson10Activity12;
