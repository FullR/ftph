var React = require("react");

var SectionHeader = React.createClass({
    render: function() {
        return (
            <div className="section-header">
                <div className="section-header__title">{this.props.title}</div>
                {this.props.letters ? 
                    <div className="section-header__letters">{this.props.letters}</div>
                    : null
                }
                <div className="section-header__lessons">Lessons {this.props.lessons}</div>
            </div>
        );
    }
});

module.exports = SectionHeader;