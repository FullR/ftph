var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity3 = React.createClass({
    render: function() {
        return (
            <Activity
                id="3"
                choices={[
                    {word: "rug"},
                    {word: "rag"},
                    {word: "rig", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson10Activity3;
