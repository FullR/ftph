var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "spine"},
                    {word: "spoon"},
                    {word: "spin", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson10Activity9;
