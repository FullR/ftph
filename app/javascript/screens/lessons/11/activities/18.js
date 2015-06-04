var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "nut"},
                    {word: "throw"},
                    {word: "knot", correct: true}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson11Activity18;
