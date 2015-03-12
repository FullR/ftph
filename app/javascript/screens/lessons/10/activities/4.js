var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity4 = React.createClass({
    render: function() {
        return (
            <Activity
                id="4"
                choices={[
                    {word: "bug"},
                    {word: "beg"},
                    {word: "big", correct: true}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson10Activity4;
