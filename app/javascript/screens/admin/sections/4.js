var React = require("react"),
    SectionHeader = require("components/admin/section-header"),
    LessonButton = require("components/admin/lesson-button");

var Section4 = React.createClass({
    isSelected(lessonId) {
        return lessonId === this.props.value;
    },

    render() {
        var onSelect = this.props.onSelect;

        return (
            <div className="admin-section admin-section-4">
                <div className="section-header-container">
                    <button className="previous-section-button" onClick={this.props.renderPrevious}>Back</button>
                    <SectionHeader title="Consonant With Vowel" lessons="21-43"/>
                    <button className="next-section-button" onClick={this.props.renderNext}>Next</button>
                </div>

                <LessonButton lessonId="21" onSelect={onSelect} selected={this.isSelected("21")}>
                    <div className="lesson-button__title">Lesson b</div>
                    <div className="inner-buttons">
                        <LessonButton lessonId="21" onSelect={onSelect} selected={this.isSelected("21")}>
                            <div className="lesson-button__title">ba</div>
                        </LessonButton>
                        <LessonButton lessonId="22" onSelect={onSelect} selected={this.isSelected("22")}>
                            <div className="lesson-button__title">be</div>
                        </LessonButton>
                        <LessonButton lessonId="23" onSelect={onSelect} selected={this.isSelected("23")}>
                            <div className="lesson-button__title">bi</div>
                        </LessonButton>
                        <LessonButton lessonId="24" onSelect={onSelect} selected={this.isSelected("24")}>
                            <div className="lesson-button__title">bo</div>
                        </LessonButton>
                        <LessonButton lessonId="25" onSelect={onSelect} selected={this.isSelected("25")}>
                            <div className="lesson-button__title">bu</div>
                        </LessonButton>
                    </div>
                </LessonButton>

                <LessonButton lessonId="26" onSelect={onSelect} selected={this.isSelected("26")}>
                    <div className="lesson-button__title">
                        ba-bu
                    </div>
                </LessonButton>

                <LessonButton lessonId="27" onSelect={onSelect} selected={this.isSelected("27")}>
                    <div className="lesson-button__title">Lesson c</div>
                    <div className="inner-buttons">
                        <LessonButton lessonId="27" onSelect={onSelect} selected={this.isSelected("27")}>
                            <div className="lesson-button__title">ca</div>
                        </LessonButton>
                        <LessonButton lessonId="28" onSelect={onSelect} selected={this.isSelected("28")}>
                            <div className="lesson-button__title">co</div>
                        </LessonButton>
                        <LessonButton lessonId="29" onSelect={onSelect} selected={this.isSelected("29")}>
                            <div className="lesson-button__title">cu</div>
                        </LessonButton>
                    </div>
                </LessonButton>

                <LessonButton lessonId="30" onSelect={onSelect} selected={this.isSelected("30")}>
                    <div className="lesson-button__title">
                        ca-cu
                    </div>
                </LessonButton>

                <LessonButton lessonId="43" onSelect={onSelect} selected={this.isSelected("43")}>
                    <div className="lesson-button__title">
                        Consonant With Vowel Review<br/>b-f
                    </div>
                </LessonButton>

                <LessonButton lessonId="31" onSelect={onSelect} selected={this.isSelected("31")}>
                    <div className="lesson-button__title">Lesson d</div>
                    <div className="inner-buttons">
                        <LessonButton lessonId="31" onSelect={onSelect} selected={this.isSelected("31")}>
                            <div className="lesson-button__title">da</div>
                        </LessonButton>
                        <LessonButton lessonId="32" onSelect={onSelect} selected={this.isSelected("32")}>
                            <div className="lesson-button__title">de</div>
                        </LessonButton>
                        <LessonButton lessonId="33" onSelect={onSelect} selected={this.isSelected("33")}>
                            <div className="lesson-button__title">di</div>
                        </LessonButton>
                        <LessonButton lessonId="34" onSelect={onSelect} selected={this.isSelected("34")}>
                            <div className="lesson-button__title">do</div>
                        </LessonButton>
                        <LessonButton lessonId="35" onSelect={onSelect} selected={this.isSelected("35")}>
                            <div className="lesson-button__title">du</div>
                        </LessonButton>
                    </div>
                </LessonButton>

                <LessonButton lessonId="36" onSelect={onSelect} selected={this.isSelected("36")}>
                    <div className="lesson-button__title">
                        da-du
                    </div>
                </LessonButton>

                <LessonButton lessonId="37" onSelect={onSelect} selected={this.isSelected("37")}>
                    <div className="lesson-button__title">Lesson f</div>
                    <div className="inner-buttons">
                        <LessonButton lessonId="37" onSelect={onSelect} selected={this.isSelected("37")}>
                            <div className="lesson-button__title">fa</div>
                        </LessonButton>
                        <LessonButton lessonId="38" onSelect={onSelect} selected={this.isSelected("38")}>
                            <div className="lesson-button__title">fe</div>
                        </LessonButton>
                        <LessonButton lessonId="39" onSelect={onSelect} selected={this.isSelected("39")}>
                            <div className="lesson-button__title">fi</div>
                        </LessonButton>
                        <LessonButton lessonId="40" onSelect={onSelect} selected={this.isSelected("40")}>
                            <div className="lesson-button__title">fo</div>
                        </LessonButton>
                        <LessonButton lessonId="41" onSelect={onSelect} selected={this.isSelected("41")}>
                            <div className="lesson-button__title">fu</div>
                        </LessonButton>
                    </div>
                </LessonButton>

                <LessonButton lessonId="42" onSelect={onSelect} selected={this.isSelected("42")}>
                    <div className="lesson-button__title">
                        fa-fu
                    </div>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section4;