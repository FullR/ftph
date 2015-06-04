var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "stitch"},
                    {word: "scratch"},
                    {word: "stretch", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity17;
