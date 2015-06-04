var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "bug"},
                    {word: "beg"},
                    {word: "big", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity2;
