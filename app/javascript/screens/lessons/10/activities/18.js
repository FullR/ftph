var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "ships", correct: true},
                    {word: "shapes"},
                    {word: "shops"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson10Activity18;
