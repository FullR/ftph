var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "bag", correct: true},
                    {word: "beg"},
                    {word: "big"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson8Activity9;
