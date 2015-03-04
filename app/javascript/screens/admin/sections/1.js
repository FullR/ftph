var React = require("react"),
    SectionHeader = require("components/admin/section-header"),
    LessonButton = require("components/admin/lesson-button");

var Section1 = React.createClass({
    isSelected: function(lessonId) {
        return lessonId === this.props.value;
    },

    render: function() {
        var onSelect = this.props.onSelect;

        return (
            <div className="admin-section admin-section-1">
                <div className="section-header-container">
                    <button className="previous-section-button" onClick={this.props.renderPrevious}>Previous Section</button>
                    <SectionHeader title="Word Sounds" lessons="1-7"/>
                    <button className="next-section-button" onClick={this.props.renderNext}>Next Section</button>
                </div>


                <LessonButton lessonId="1" onSelect={onSelect} selected={this.isSelected("1")}>
                    <div className="lesson-button__title">
                        Beginning Sounds
                    </div>
                    <div className="sub-lessons">
                        <LessonButton lessonId="1-m" onSelect={onSelect} selected={this.isSelected("1-m")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/m/</div>
                        </LessonButton>
                        <LessonButton lessonId="1-l" onSelect={onSelect} selected={this.isSelected("1-l")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/l/</div>
                        </LessonButton>
                        <LessonButton lessonId="1-n" onSelect={onSelect} selected={this.isSelected("1-n")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/n/</div>
                        </LessonButton>
                        <LessonButton lessonId="1-r" onSelect={onSelect} selected={this.isSelected("1-r")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/r/</div>
                        </LessonButton>
                        <LessonButton lessonId="1-g" onSelect={onSelect} selected={this.isSelected("1-g")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/g/</div>
                        </LessonButton>
                        <LessonButton lessonId="1-s" onSelect={onSelect} selected={this.isSelected("1-s")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/s/</div>
                        </LessonButton>
                    </div>
                </LessonButton>

                <LessonButton lessonId="2" onSelect={onSelect} selected={this.isSelected("2")}>
                    <div className="lesson-button__title">
                        Ending Sounds
                    </div>
                    <div className="sub-lessons">
                        <LessonButton lessonId="2-d" onSelect={onSelect} selected={this.isSelected("2-d")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/d/</div>
                        </LessonButton>
                        <LessonButton lessonId="2-p" onSelect={onSelect} selected={this.isSelected("2-p")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/p/</div>
                        </LessonButton>
                        <LessonButton lessonId="2-k" onSelect={onSelect} selected={this.isSelected("2-k")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/k/</div>
                        </LessonButton>
                        <LessonButton lessonId="2-f" onSelect={onSelect} selected={this.isSelected("2-f")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/f/</div>
                        </LessonButton>
                        <LessonButton lessonId="2-m" onSelect={onSelect} selected={this.isSelected("2-m")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/m/</div>
                        </LessonButton>
                        <LessonButton lessonId="2-b" onSelect={onSelect} selected={this.isSelected("2-b")} className="sub-lesson-button">
                            <div className="sub-lesson__title">/b/</div>
                        </LessonButton>
                    </div>
                </LessonButton>

                <LessonButton lessonId="3" onSelect={onSelect} selected={this.isSelected("3")}>
                    <div className="lesson-button__title">
                        Beginning and Ending Sounds
                    </div>
                </LessonButton>

                <LessonButton lessonId="4" onSelect={onSelect} selected={this.isSelected("4")}>
                    <div className="lesson-button__title">
                        Rhyme Match
                    </div>
                </LessonButton>

                <LessonButton lessonId="5" onSelect={onSelect} selected={this.isSelected("5")}>
                    <div className="lesson-button__title">
                        Rhyme Time
                    </div>
                </LessonButton>

                <LessonButton lessonId="6" onSelect={onSelect} selected={this.isSelected("6")}>
                    <div className="lesson-button__title">
                        Say the Word
                    </div>
                </LessonButton>

                <LessonButton lessonId="7" onSelect={onSelect} selected={this.isSelected("7")}>
                    <div className="lesson-button__title">
                        Echo
                    </div>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section1;