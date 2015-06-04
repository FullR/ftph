var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "fix"},
                    {word: "fast"},
                    {word: "fox", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson18Activity9;
