var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "hop", correct: true},
                    {word: "up"},
                    {word: "hip"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson11Activity3;
