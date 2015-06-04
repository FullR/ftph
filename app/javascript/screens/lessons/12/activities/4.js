var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "cup", correct: true},
                    {word: "cop"},
                    {word: "cap"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson12Activity4;
