var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "chess"},
                    {word: "chips", correct: true},
                    {word: "cheese"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson10Activity17;
