var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "ships", correct: true},
                    {word: "shapes"},
                    {word: "shops"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity17;
