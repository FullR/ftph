var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "watch"},
                    {word: "itch", correct: true},
                    {word: "wrench"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson10Activity16;
