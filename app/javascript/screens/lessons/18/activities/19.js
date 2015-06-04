var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "sax"},
                    {word: "socks", correct: true},
                    {word: "six"}
                ]}
                nextScreen={require("screens/lessons/18/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson18Activity19;
