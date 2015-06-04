var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "bug", correct: true},
                    {word: "bag"},
                    {word: "beg"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson19Activity4;
