var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "pit", correct: true},
                    {word: "pet"},
                    {word: "putt"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson10Activity15;
