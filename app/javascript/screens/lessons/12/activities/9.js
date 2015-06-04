var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "fin"},
                    {word: "fan"},
                    {word: "fun", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson12Activity9;
