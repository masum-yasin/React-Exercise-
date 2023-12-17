import React from 'react';
import CoursesBanner from '../Component/CoursesBanner/CoursesBanner';
import Course from '../Component/Courese/Course';
import Register from '../Component/Register/Register';
import AwesomeFeatures from '../Component/AwesomeFeatures/AwesomeFeatures';

const Courses = () => {
    return (
        <>
            <div>
        <CoursesBanner></CoursesBanner>
        <Course></Course>
        <Register></Register>
        <AwesomeFeatures></AwesomeFeatures>
            </div>
        </>
    );
};

export default Courses;