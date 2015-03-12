var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "slide"},
                    {word: "sled"},
                    {word: "slip", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson10Activity14;
