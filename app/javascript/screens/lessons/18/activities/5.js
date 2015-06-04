var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "lock", correct: true},
                    {word: "lick"},
                    {word: "lake"}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson18Activity5;
