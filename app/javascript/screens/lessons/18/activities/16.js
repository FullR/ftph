var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "top", correct: true},
                    {word: "tip"},
                    {word: "tape"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson18Activity16;
