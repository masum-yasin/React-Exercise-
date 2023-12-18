import React from 'react';
import './CoursesBanner.css'
import { Link } from 'react-router-dom';

const CoursesBanner = () => {
    return (
        <>
         <div className='courses-banner'>
           <h1>Courses</h1>
                <div className='courses-link'>
                    <Link to="/">Home /</Link>
                    <Link to ="/courses">Courses</Link>
                </div>
           
            </div>   
        </>
    );
};

export default CoursesBanner;