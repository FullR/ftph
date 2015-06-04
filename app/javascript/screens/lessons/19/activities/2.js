var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "eagle"},
                    {word: "igloo"},
                    {word: "ugly", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson19Activity2;
