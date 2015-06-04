var store = require("storage");

module.exports = {
    getInitialState() {
        var lastLesson = (store.get("lastScreen") || {}).lesson;

        if(lastLesson) {
            return {
                selectedLesson: lastLesson.split("-")[0]
            };
        }
        return {
            selectedLesson: "1"
        };
    },

    selectLesson(lessonId) {
        this.setState({
            selectedLesson: lessonId
        });
    }
};