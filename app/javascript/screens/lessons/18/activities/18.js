var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "cot", correct: true},
                    {word: "cut"},
                    {word: "cat"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson18Activity18;
