var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                phonics={["c", "ah", "t"]}
                choices={[
                    {word: "cop"},
                    {word: "cut"},
                    {word: "cat", correct: true}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});