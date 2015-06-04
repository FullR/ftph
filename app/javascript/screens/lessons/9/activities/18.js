var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "stitch"},
                    {word: "scratch"},
                    {word: "stretch", correct: true}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson9Activity18;
