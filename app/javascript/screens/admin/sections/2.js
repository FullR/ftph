var React = require("react"),
    SectionHeader = require("components/admin/section-header"),
    LessonButton = require("components/admin/lesson-button");

var Section2 = React.createClass({
    isSelected(lessonId) {
        return lessonId === this.props.value;
    },

    render() {
        var onSelect = this.props.onSelect;

        return (
            <div className="admin-section admin-section-2">
                <div className="section-header-container">
                    <button className="previous-section-button" onClick={this.props.renderPrevious}>Back</button>
                    <SectionHeader title="Short Vowel Sounds" lessons="8-14"/>
                    <button className="next-section-button" onClick={this.props.renderNext}>Next</button>
                </div>
    
                <LessonButton lessonId="8" onSelect={onSelect} selected={this.isSelected("8")}>
                    <div className="lesson-button__title">Short a</div>
                </LessonButton>
                <LessonButton lessonId="9" onSelect={onSelect} selected={this.isSelected("9")}>
                    <div className="lesson-button__title">Short e</div>
                </LessonButton>
                <LessonButton lessonId="10" onSelect={onSelect} selected={this.isSelected("10")}>
                    <div className="lesson-button__title">Short i</div>
                </LessonButton>
                <LessonButton lessonId="11" onSelect={onSelect} selected={this.isSelected("11")}>
                    <div className="lesson-button__title">Short o</div>
                </LessonButton>
                <LessonButton lessonId="12" onSelect={onSelect} selected={this.isSelected("12")}>
                    <div className="lesson-button__title">Short u</div>
                </LessonButton>
                <LessonButton lessonId="13" onSelect={onSelect} selected={this.isSelected("13")}>
                    <div className="lesson-button__title">Odd One Out</div>
                </LessonButton>
                <LessonButton lessonId="14" onSelect={onSelect} selected={this.isSelected("14")}>
                    <div className="lesson-button__title">Forming New Words</div>
                </LessonButton>
            </div>

        );
    }
});

module.exports = Section2;