var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {word: "nut"},
                    {word: "net"},
                    {word: "knot", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson18Activity10;
