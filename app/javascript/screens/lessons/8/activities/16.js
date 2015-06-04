var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "badge", correct: true},
                    {word: "bridge"},
                    {word: "edge"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson8Activity16;
