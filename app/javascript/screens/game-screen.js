var React       = require("react"),
    AdminButton = require("components/admin/admin-button");

var GameScreen = React.createClass({
    mixins: [require("mixins/storage")],
    propTypes: {
        section: React.PropTypes.string.isRequired
    },

    componentWillMount: function() {
        if(this.props.section) {
            this.save("last-section", this.props.section);
        }
    },

    render: function() {
        return (
            <div {...this.props}>
                {this.props.children}
                <AdminButton/>
            </div>
        );
    }
});

module.exports = GameScreen;