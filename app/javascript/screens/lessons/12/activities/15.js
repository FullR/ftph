var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "batter"},
                    {word: "boater"},
                    {word: "butter", correct: true}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson12Activity15;
