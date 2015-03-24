var React = require("react"),
    SectionHeader = require("components/admin/section-header"),
    LessonButton = require("components/admin/lesson-button");

var Section3 = React.createClass({
    isSelected: function(lessonId) {
        return lessonId === this.props.value;
    },

    render: function() {
        var onSelect = this.props.onSelect;

        return (
            <div className="admin-section admin-section-3">
                <div className="section-header-container">
                    <button className="previous-section-button" onClick={this.props.renderPrevious}>Back</button>
                    <SectionHeader title="Short Vowels" lessons="15-20"/>
                    <button className="next-section-button" onClick={this.props.renderNext}>Next</button>
                </div>
    
                <LessonButton lessonId="15" onSelect={onSelect} selected={this.isSelected("15")}>
                    <div className="lesson-button__title">Short a</div>
                </LessonButton>
                <LessonButton lessonId="16" onSelect={onSelect} selected={this.isSelected("16")}>
                    <div className="lesson-button__title">Short e</div>
                </LessonButton>
                <LessonButton lessonId="17" onSelect={onSelect} selected={this.isSelected("17")}>
                    <div className="lesson-button__title">Short i</div>
                </LessonButton>
                <LessonButton lessonId="18" onSelect={onSelect} selected={this.isSelected("18")}>
                    <div className="lesson-button__title">Short o</div>
                </LessonButton>
                <LessonButton lessonId="19" onSelect={onSelect} selected={this.isSelected("19")}>
                    <div className="lesson-button__title">Short u</div>
                </LessonButton>
                <LessonButton lessonId="20" onSelect={onSelect} selected={this.isSelected("20")}>
                    <div className="lesson-button__title">Short Vowels Review</div>
                </LessonButton>
            </div>

        );
    }
});

module.exports = Section3;