var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "track", correct: true},
                    {word: "trick"},
                    {word: "truck"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson8Activity15;
