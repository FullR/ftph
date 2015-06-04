var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "edge", correct: true},
                    {word: "bridge"},
                    {word: "cage"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson9Activity16;
