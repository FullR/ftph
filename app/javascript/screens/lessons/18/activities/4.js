var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "duck"},
                    {word: "dock", correct: true},
                    {word: "deck"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson18Activity4;
