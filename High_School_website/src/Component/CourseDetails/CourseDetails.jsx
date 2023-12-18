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
                <Link to="/course">Course /</Link>
                <Link to="/coursedetails">Course Details /</Link>
            </div>
         </div>
         <div className="coursedetails-img  row ">
            <div className=" col-md-6">
                <img src={'img/courses/course-details.jpg'} alt="" />
            </div>
            <div className="course-information col-md-6 border border-4 mt-2 text-info rounded-3 p-4 border-success">
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
                    <button className='coursedetails-button'>ENROLL THE COURSE</button> 
                    </div>
                     </div>
                     <div className="objectmaindiv row ">
                        <div className="objectheading  col-md-7">
                        <h2 className='text-warning'>Objectives</h2>
                     <hr/>
                     <p className='text-center'>When you enter into any new area of science, you almost always find yourself with a<br></br> baffling new language of technical terms to learn before you can converse with the <br></br>experts. This is certainly true in astronomy both in terms of terms that refer to the<br></br> cosmos and terms that describe the tools of the trade, the most prevalent being<br></br> the telescope.</p>

                   <p className='mt-5 text-center'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.<br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem<br></br> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                     </div>
                     <div className="review col-md-5">
                        <h2 className='text-warning'>Reviews</h2>
                        <h5 className='text-danger'>Provide Your Rating</h5>
                        <div>
                            <div><h5>Quality</h5></div>
                            <div></div>
                        </div>
                      
                     </div>
                     </div>
                    
        </>
    );
};

export default CourseDetails;