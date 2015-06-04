var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "ash"},
                    {word: "elk"},
                    {word: "otter", correct: true}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson11Activity4;
