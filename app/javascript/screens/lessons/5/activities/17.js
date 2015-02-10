var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "square", correct: true},
                    {word: "jar", correct: true},
                    {word: "bear"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson5Activity17;