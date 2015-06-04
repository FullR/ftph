var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "hat"},
                    {word: "hut", correct: true},
                    {word: "hot"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson19Activity9;
