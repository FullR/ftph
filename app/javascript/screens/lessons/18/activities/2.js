var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "elk"},
                    {word: "ox", correct: true},
                    {word: "ax"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson18Activity2;
