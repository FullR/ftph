"use strict";

module.exports = function(lessonId) {
    lessonId = +lessonId;
    if(lessonId <= 7)   return "1";
    if(lessonId <= 14)  return "2";
    if(lessonId <= 20)  return "3";
    if(lessonId <= 43)  return "4";
    if(lessonId <= 63)  return "5";
    if(lessonId <= 88)  return "6";
    if(lessonId <= 108) return "7";
    if(lessonId <= 121) return "8";
    if(lessonId <= 124) return "9";
    if(lessonId <= 126) return "10";
    return "1";
};