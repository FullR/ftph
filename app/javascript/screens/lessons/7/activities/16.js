var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                phonics={["f", "l", "ih", "p"]}
                choices={[
                    {word: "flag"},
                    {word: "flip", correct: true},
                    {word: "slip"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});
