var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "cot", correct: true},
                    {word: "cut"},
                    {word: "coat"}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson11Activity19;
