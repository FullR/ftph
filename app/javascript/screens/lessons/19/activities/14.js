var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                choices={[
                    {word: "rug", correct: true},
                    {word: "rag"},
                    {word: "rig"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson19Activity14;
