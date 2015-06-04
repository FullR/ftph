var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "cup"},
                    {word: "cop", correct: true},
                    {word: "cap"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson11Activity11;
