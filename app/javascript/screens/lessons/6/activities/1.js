var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                phonics={["eh", "g"]}
                choices={[
                    {word: "box"},
                    {word: "egg", correct: true},
                    {word: "cat"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});