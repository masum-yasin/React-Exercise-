import React from 'react';
import './CourseDetails.css'
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    return (
        <>
         <div className='courseDetails'>
            <h1>Course Details</h1>
            <div className='coursedetails-pagelink'>
                <Link to="/">Home /</Link>
                <Link to="/coursebanner">Course /</Link>
                <Link to="/coursedetails">Course Details /</Link>
            </div>
         </div>
         <div className="coursedetails-img  row ">
            <div className=" col-md-7">
                <img src={'img/courses/course-details.jpg'} alt="" />
            </div>
            <div className="col-md-5">
                <div className='d-flex justify-content-evenly'>
                    <div>
                       <h6>Trainer's Name</h6> 
                    </div>
                    <div><h6>George Mathews</h6></div>
                </div>
                <div className='d-flex justify-content-evenly mt-4 text-center'>
                    <div><h6>Course Fee</h6></div>
                    <div><h6>$1250</h6></div>
                </div>
                <div className='d-flex justify-content-evenly mt-4 text-center'>
                    <div><h6>Available Seats</h6></div>
                    <div><h6>30</h6></div>
                </div>
                <div className='d-flex justify-content-evenly mt-4 text-center'>
                    <div><h6>Schedule</h6></div>
                    <div><h6>2 Pm to 4 Pm </h6></div>
                </div>
                <div className='d-flex justify-content-evenly mt-4 text-center'>
                    <div><h6>Course Name</h6></div>
                    <div><h6>Web Development</h6></div>
                </div>


            </div>
         </div>
           
        </>
    );
};

export default CourseDetails;