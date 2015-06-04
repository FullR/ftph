var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "shut"},
                    {word: "shot", correct: true},
                    {word: "sheet"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson18Activity12;
