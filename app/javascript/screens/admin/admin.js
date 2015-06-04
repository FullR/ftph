var React = require("react");
var WebLink = require("components/utility/web-link");
var render = require("render");
var sections = require("screens/admin/sections");

var Admin = React.createClass({
    mixins: [require("mixins/storage")],

    // Lifecycle methods
    getInitialState() {
        return {
            section: +(this.load("last-section") || 1),
            selectedLesson: this.load("last-lesson") || "1"
        };
    },

    componentDidUpdate() {
        if(this.state.changed) {
            setTimeout(this.toggleChangedFlagOff, 1000);
        }
    },

    getArrowText() {
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

    // Component methods
    getSectionComponent() {
        return sections[this.state.section];
    },

    loadLesson(id) {
        return this.load(`lesson-${id}`) || {};
    },

    nextSection() {
        if(sections[this.state.section + 1]) {
            this.setState({
                selectedLesson: this.state.selectedLesson,
                section: this.state.section + 1
            });
        }
        else {
            console.log("Next section doesn't exist?",this.state.section);
        }
    },

    previousSection() {
        if(sections[this.state.section - 1]) {
            this.setState({
                selectedLesson: this.state.selectedLesson,
                section: this.state.section - 1
            });
        }
    },

    returnToGame() {
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
            render(<Activity playFullInstructions={true}/>);
        }
    },

    toggleChangedFlagOff() {
        if(this.isMounted()) {
            this.state.changed = false;
            this.setState(this.state);
        }
    },

    updateSelectedLesson(newLessonId) {
        if(this.state.selectedLesson !== newLessonId) {
            this.setState({
                section: this.state.section,
                selectedLesson: newLessonId,
                changed: true
            });
        }
    },

    // Render methods
    render() {
        var Section = this.getSectionComponent(),
            changedClassName = "";

        if(this.state.changed) {
            changedClassName = "admin--changed";
        }

        return (
            <div className={`admin ${changedClassName}`}>
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