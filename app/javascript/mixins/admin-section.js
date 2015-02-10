var store = require("storage");

module.exports = {
    getInitialState: function() {
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

    selectLesson: function(lessonId) {
        this.setState({
            selectedLesson: lessonId
        });
    }
};