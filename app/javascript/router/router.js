"use strict";

var React      = require("react"),
    _          = require("lodash"),
    $          = require("jquery"),
    $outlet    = $("#outlet"),
    outlet     = $outlet.get(0),
    actions    = require("router/actions"),
    store      = require("storage"),
    lessonData = require("data/lessons"),
    slice      = [].slice;

var components = {
    "splash":           require("screens/splash"),
    "activity-wrapper": require("screens/activity-wrapper"),
    "lesson-wrapper":   require("screens/lesson-wrapper"),
    "lesson-feedback":  require("screens/lesson-feedback"),
    "admin":            require("screens/admin/admin"),
    "admin-check":      require("screens/admin/admin-check")
};

function render(componentName) {
    return function(options) {
        React.render(React.createElement(components[componentName], options), outlet);
    };
}

function getParams(/* ...keys */) {
    var keys = slice.call(arguments);
    return function(params) {
        return _.zipObject(keys, params || []);
    };
}

var activity = actions.activity.map(getParams("lessonId", "activityId")).map(function(params) {
    params.lessonInfo = lessonData[params.lessonId] || {};
    return params;
});

var lesson = actions.lesson.map(getParams("lessonId")).map(function(params) {
    return _.extend(params, lessonData[params.lessonId] || {});
});

actions.index
    .onValue(render("splash"));


activity.onValue(render("activity-wrapper"));
lesson.onValue(render("lesson-wrapper"));

actions.lessonFeedback
    .map(function(params) {
        var id = params[0];
        return _.extend({
            id: id,
            lessonData: store.getLessonData(id)
        }, lessonData[id]);
    })
    .onValue(render("lesson-feedback"));

actions.admin
    .map(getParams("sectionId"))
    .onValue(render("admin"));


actions.adminCheck
    .onValue(render("admin-check"));

// Save last lesson/activity for admin screen
activity.onValue(function(params) {
    store.set({
        lastLesson: params.lessonId,
        lastActivity: {
            lesson: params.lessonId,
            activity: params.activityId
        },
        lastScreen: {
            lesson: params.lessonId,
            activity: params.activityId
        }
    });
});

lesson.onValue(function(params) {
    store.set({
        lastLesson: params.lessonId,
        lastScreen: {
            lesson: params.lessonId,
            activity: null
        }
    });
});

actions.start();
//Backbone.history.loadUrl();