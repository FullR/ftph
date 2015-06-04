var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "bed"},
                    {word: "bad"},
                    {word: "bid", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson10Activity13;
