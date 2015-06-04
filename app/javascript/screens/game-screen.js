var React = require("react");
var AdminButton = require("components/admin/admin-button");

var GameScreen = React.createClass({
    mixins: [require("mixins/storage")],
    propTypes: {
        section: React.PropTypes.string.isRequired
    },

    componentWillMount() {
        if(this.props.section) {
            this.save("last-section", this.props.section);
        }
    },

    render() {
        return (
            <div {...this.props}>
                {this.props.children}
                <AdminButton/>
            </div>
        );
    }
});

module.exports = GameScreen;