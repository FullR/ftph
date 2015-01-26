"use strict";

var React                = require("react"),
    LessonButton         = require("components/lesson-button"),
    AdminSublessonMarker = require("components/admin-sublesson-marker");

var Section1 = React.createClass({
    render: function() {
        var {selectLesson, selectedLesson} = this.props;
        console.log(selectedLesson);
        return (
            <div className='admin-section-1'>
                <LessonButton lesson='1' title='Beginning Sounds' className='sec-1-btn-long' selectLesson={selectLesson} selected={selectedLesson === '1'}>
                    <AdminSublessonMarker parent='1' letter='m' activities={["4", "5"]} selectLesson={selectLesson} selected={selectedLesson === '1-m'}/>
                    <AdminSublessonMarker parent='1' letter='l' activities={["6", "7"]} selectLesson={selectLesson} selected={selectedLesson === '1-l'}/>
                    <AdminSublessonMarker parent='1' letter='n' activities={["8", "9"]} selectLesson={selectLesson} selected={selectedLesson === '1-n'}/>
                    <AdminSublessonMarker parent='1' letter='r' activities={["10", "11"]} selectLesson={selectLesson} selected={selectedLesson === '1-r'}/>
                    <AdminSublessonMarker parent='1' letter='g' activities={["12", "13"]} selectLesson={selectLesson} selected={selectedLesson === '1-g'}/>
                    <AdminSublessonMarker parent='1' letter='s' activities={["14", "15"]} selectLesson={selectLesson} selected={selectedLesson === '1-s'}/>
                </LessonButton>
                <LessonButton lesson='2' title='Ending Sounds' className='sec-1-btn-long' selectLesson={selectLesson} selected={selectedLesson === '2'}>
                    <AdminSublessonMarker parent='2' letter='d' activities={["4", "5"]} selectLesson={selectLesson} selected={selectedLesson === '2-d'}/>
                    <AdminSublessonMarker parent='2' letter='p' activities={["6", "7"]} selectLesson={selectLesson} selected={selectedLesson === '2-p'}/>
                    <AdminSublessonMarker parent='2' letter='k' activities={["8", "9"]} selectLesson={selectLesson} selected={selectedLesson === '2-k'}/>
                    <AdminSublessonMarker parent='2' letter='f' activities={["10", "11"]} selectLesson={selectLesson} selected={selectedLesson === '2-f'}/>
                    <AdminSublessonMarker parent='2' letter='m' activities={["12", "13"]} selectLesson={selectLesson} selected={selectedLesson === '2-m'}/>
                    <AdminSublessonMarker parent='2' letter='b' activities={["14", "15"]} selectLesson={selectLesson} selected={selectedLesson === '2-b'}/>
                </LessonButton>
                <LessonButton lesson='3' title='Beginning and Ending Sounds' className='sec-1-btn-long' selectLesson={selectLesson} selected={selectedLesson === '3'}/>
                <LessonButton lesson='4' title='Rhyme Match' className='sec-1-btn-short' selectLesson={selectLesson} selected={selectedLesson === '4'}/>
                <LessonButton lesson='5' title='Rhyme Time' className='sec-1-btn-short' selectLesson={selectLesson} selected={selectedLesson === '5'}/>
                <LessonButton lesson='6' title='Say the Word' className='sec-1-btn-short' selectLesson={selectLesson} selected={selectedLesson === '6'}/>
                <LessonButton lesson='7' title='Echo' className='sec-1-btn-short' selectLesson={selectLesson} selected={selectedLesson === '7'}/>

            </div>
        );
    }
});

module.exports = Section1;