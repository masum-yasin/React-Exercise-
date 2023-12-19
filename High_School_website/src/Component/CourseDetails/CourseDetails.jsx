import React from 'react';
import './CourseDetails.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar} from '@fortawesome/free-solid-svg-icons'

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
            <div className=" col-md-6 col-sm-12">
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
                     {/* Object section start  */}
                     <div className="objectmaindiv row ">
                        <div className="objectheading  col-md-7 col-sm-12">
                        <h2 className='text-warning'>Objectives</h2>
                     <hr/>
                     <p className='text-center'>When you enter into any new area of science, you almost always find yourself with a<br></br> baffling new language of technical terms to learn before you can converse with the <br></br>experts. This is certainly true in astronomy both in terms of terms that refer to the<br></br> cosmos and terms that describe the tools of the trade, the most prevalent being<br></br> the telescope.</p>

                   <p className='mt-5 text-center'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.<br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem<br></br> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                     </div>
                     <div className="review col-md-5 col-sm-12">
                        <h2 className='text-warning'>Reviews</h2>
                        <h5 className='text-danger mt-2'>Provide Your Rating</h5>
                        <div className='d-flex gap-5 mt-2'>
                            <div><h5>Quality</h5></div>
                            <div className='coursedetails-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                            <div><h5>Outstanding</h5></div>
                        </div>
                        <div className='d-flex gap-5 mt-2'>
                            <div><h5>Quality</h5></div>
                            <div className='coursedetails-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                            <div><h5>Outstanding</h5></div>
                        </div>
                        <div className='d-flex gap-5 mt-2'>
                            <div><h5>Quality</h5></div>
                            <div className='coursedetails-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                            <div><h5>Outstanding</h5></div>
                        </div>
                            <h6 className='mt-2'>Your Feedback</h6>
                           <form action="">
                           <textarea className='feedback-content' name="feedback" id="" cols="10" rows="10" ></textarea><br></br>
                            <button className='feedbackbutton mt-1'>SUBMIT</button>
                           </form>
                     </div>
                     </div>
                     {/* object section ending */}
                     {/* eligibility-section start */}
                    <div className="eligibility-section row">
                        <div className="col-md-7 col-sm-12">
                            <h3 className='text-warning'>Eligibility</h3>
                            <hr />
                            <p className='text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br></br> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br></br> irure dolor in reprehenderit in voluptate velit esse cillum.

                    Lorem ipsum dolor sit<br></br> amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br></br> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br></br> ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor<br></br> in reprehenderit in voluptate velit esse cillum.</p>
                    
                    <p className='mt-4 text-center'>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et<br></br> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br></br> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br></br> dolor in reprehenderit in voluptate velit esse cillum.</p>
                        </div>
                        <div className="col-md-5 col-sm-12">
                           <div className='d-flex gap-5'>
                           <div>
                                <img className='mt-4' src={'img/blog/c1.jpg'} alt="" />
                            </div>
                            <div>
                                <h6 className='coursedetails-icon'>Emilly Blunt  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                                <p>Lorem ipsum dolor sit amet,<br></br>consectetur adipisicing elit,<br></br> sed do eiusmod tempor incididunt<br></br> ut labore et dolore.</p>
                            </div>
                           </div>
                            <div className="d-flex gap-5">
                            <div>
                                <img className='mt-4' src={'img/blog/c2.jpg'} alt="" />
                            </div>
                            <div>
                                <h6 className='coursedetails-icon'>Maria Luna <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                                <p>Lorem ipsum dolor sit amet,<br></br>consectetur adipisicing elit,<br></br> sed do eiusmod tempor incididunt<br></br> ut labore et dolore.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-5">
                            <div>
                                <img className='mt-4' src={'img/blog/c3.jpg'} alt="" />
                            </div>
                            <div>
                                <h6 className='coursedetails-icon'>Elsie Cunningham<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                                <p>Lorem ipsum dolor sit amet,<br></br>consectetur adipisicing elit,<br></br> sed do eiusmod tempor incididunt<br></br> ut labore et dolore.</p>
                            </div>
                        </div>
                        </div>
                        </div>
                {/* eligibility-section ending */}
                    <div className="allcourse_img row">
                        <div className="border border-4 p-3 m-lg-4 text-center mt-3 col-md-2 col-sm-12">
                        <img src={'img/courses_icon/react_img.png'} alt="" />
                        <h4 className='text-info'>Ract</h4>
                        <h6>JavaScript Library</h6>
                        <p>One Page Application</p>
                        </div>
                        <div className="border border-4 p-3 m-lg-4 text-center mt-3 col-md-2 col-sm-12">
                        <img src={'img/courses_icon/angular_img.png'} alt="" />
                        <h4 className='text-warning'>Angular</h4>
                        <h6>JavaScript Framework</h6>
                        <p>One Page Application</p>
                        </div>
                        <div className="border border-4 p-3 m-lg-4 text-center mt-3 col-md-2 col-sm-12">
                        <img src={'img/courses_icon/html_img.png'} alt="" />
                        <h4 className='text-warning'>HTML</h4>
                        <h6>Build Up Application</h6>
                        <p>Hyper Text Markup Language</p>
                        </div>
                    </div>

        </>
    );
};

export default CourseDetails;