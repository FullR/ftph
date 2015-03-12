var React    = require("react"),
    WebLink  = require("components/utility/web-link"),
    render   = require("render"),
    sections = require("screens/admin/sections"),
    SectionList = require("components/admin/section-list");

var Admin = React.createClass({
    mixins: [
        require("mixins/storage")
    ],

    getInitialState: function() {
        return {
            section: this.props.section || 1,
            selectedLesson: this.load("last-lesson") || "1"
        };
    },

    loadLesson: function(id) {
        return this.load(`lesson-${id}`) || {};
    },

    getArrowText: function() {
        var selectedData = this.loadLesson(this.state.selectedLesson);
        if(selectedData["last-screen"]) {
            return "Return to";
        }
        else if(selectedData.completed) {
            return "Replay";
        }
        else {
            return "Play";
        }
    },

    updateSelectedLesson: function(newLessonId) {
        this.setState({
            section: this.state.section,
            selectedLesson: newLessonId
        });
    },

    getSectionComponent: function() {
        return sections[this.state.section];
    },

    returnToGame: function() {
        var selectedLesson  = this.state.selectedLesson,
            lastScreen      = this.loadLesson(selectedLesson)["last-screen"],
            Lesson          = require("screens/lessons").get(selectedLesson),
            LessonFeeedback = require("screens/lessons/feedback-index")[selectedLesson],
            activities      = require("screens/lessons/activity-index")[selectedLesson],
            Activity;

        if(!lastScreen) {
            render(<Lesson/>);
        }
        else if(lastScreen === "feedback") {
            render(<LessonFeeedback/>);
        }
        else {
            Activity = activities[lastScreen];
            render(<Activity/>);
        }
    },

    nextSection: function() {
        if(sections[this.state.section + 1]) {
            this.setState({
                selectedLesson: this.state.selectedLesson,
                section: this.state.section + 1
            });
        }
    },

    previousSection: function() {
        if(sections[this.state.section - 1]) {
            this.setState({
                selectedLesson: this.state.selectedLesson,
                section: this.state.section - 1
            });
        }
    },

    render: function() {
        var Section = this.getSectionComponent();

        return (
            <div className="admin">
                <div className="admin__header">
                    <ul className="admin__header-nav">
                        <li className="admin__header-nav-item">User</li>
                        <li className="admin__header-nav-item">Restart</li>
                        <li className="admin__header-nav-item">About</li>
                    </ul>
                    <span className="admin__header-title">Fun-Time Phonics{String.fromCharCode(8482)} Admin/Score</span>
                    <span className="admin__header-grades">PreK - 2</span>
                </div>

                <div className="admin__content">
                    {/* <SectionList current={this.state.section}/> */}

                    <p style={{display: "none", fontSize: 44, position: "absolute", width: "100%", textAlign: "center", fontWeight: "bold", top: "15%"}}>THIS PAGE IS UNDER CONSTRUCTION</p>

                    <div className="admin__current-section">
                        <Section value={this.state.selectedLesson} onSelect={this.updateSelectedLesson} renderNext={this.nextSection} renderPrevious={this.previousSection}/>
                    </div>

                    <div className="admin__back-button" onClick={this.returnToGame}>
                        {this.getArrowText()} Lesson {this.state.selectedLesson}
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = Admin;