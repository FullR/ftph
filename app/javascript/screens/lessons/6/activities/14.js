var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                phonics={["sh", "oh", "p"]}
                choices={[
                    {word: "chop"},
                    {word: "ship"},
                    {word: "shop", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});