var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "pit"},
                    {word: "pet"},
                    {word: "pot", correct: true}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson18Activity7;
