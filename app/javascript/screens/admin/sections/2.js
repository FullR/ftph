var React = require("react"),
    SectionHeader = require("components/admin/section-header"),
    LessonButton = require("components/admin/lesson-button");

var Section2 = React.createClass({
    isSelected: function(lessonId) {
        return lessonId === this.props.value;
    },

    render: function() {
        var onSelect = this.props.onSelect;

        return (
            <div className="admin-section admin-section-2">
                <button className="previous-section-button">Previous Section</button>
                <SectionHeader title="Word Sounds" lessons="7-14"/>
                <button className="next-section-button">Next Section</button>
            </div>
        );
    }
});

module.exports = Section2;