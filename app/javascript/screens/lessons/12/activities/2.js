var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "igloo"},
                    {word: "ugly", correct: true},
                    {word: "eagle"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson12Activity2;
