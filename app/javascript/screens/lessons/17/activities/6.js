var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "sip", correct: true},
                    {word: "sap"},
                    {word: "soup"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity6;
