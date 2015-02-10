var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "shop"},
                    {word: "shot", correct: true},
                    {word: "knot", correct: true}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson5Activity11;