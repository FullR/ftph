var React = require("react");

var LessonButton = React.createClass({
    mixins: [require("mixins/class-names")],

    onClick: function(event) {
        event.preventDefault();
        event.stopPropagation();

        if(this.props.onSelect) {
            this.props.onSelect(this.props.lessonId);
        }
    },

    render: function() {
        var classNames = this.classNames(
            "lesson-button",
            "lesson-button-"+this.props.lessonId,
            this.props.selected ? "lesson-button--selected" : null
        );

        return (
            <div {...this.props} onClick={this.onClick} className={classNames}>
                <div className="lesson-button__index">{this.props.lessonId}</div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = LessonButton;