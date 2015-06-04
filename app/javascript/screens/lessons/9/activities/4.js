var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "ill"},
                    {word: "off"},
                    {word: "elm", correct: true}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson9Activity4;
