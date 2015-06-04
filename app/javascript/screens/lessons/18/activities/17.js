var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "ships"},
                    {word: "shapes"},
                    {word: "shops", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson18Activity17;
