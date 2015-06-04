var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "boot"},
                    {word: "beet"},
                    {word: "bit", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson10Activity8;
