import React from 'react';
import './CourseDetails.css'
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar} from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const CourseDetails = () => {
    return (
        <>
         <div className='courseDetails'>
            <h1>Course Details</h1>
            <div className='coursedetails-pagelink'>
                {/* <Link to="/">Home </Link>
                <Link to="/course">Course /</Link> */}
                {/* <Link to="/coursedetails">Course Details /</Link> */}
                <Breadcrumb></Breadcrumb>
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
                {/* All Course Section Start */}
                    <div className="allcourse_img row">
                        <div className="detailscourse-img border border-4 border-info p-1 text-center mt-3 col-md-2 col-sm-12 m-md-2" >
                        <img src={'img/courses_icon/react_img.png'} alt="" />
                        <h4 className='text-info'>Ract</h4>
                        <h6>JavaScript Library</h6>
                        <p>One Page Application</p>
                        </div>
                        <div className="border border-4 border-danger p-2 text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/angular_img.png'} alt="" />
                        <h4 className='text-danger'>Angular</h4>
                        <h6>JavaScript Framework</h6>
                        <p>One Page Application</p>
                        </div>
                        <div className="border border-4 p-2 border-warning  text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/html_img.png'} alt="" />
                        <h4 className='text-warning'>HTML</h4>
                        <h6>Build Up Application</h6>
                        <p>Hyper Text Markup Language</p>
                        </div>
                        <div className="border border-4 p-1 border-info  text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/wordpress_img.png'} alt="" />
                        <h4 className='text-info'>Wordpress</h4>
                        <h6>Content Management System</h6>
                        <p>Theme and Plugin Development</p>
                        </div>
                        <div className="border border-4 p-2 border-dark text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/pythen_img.png'} alt="" />
                        <h4 className='text-warning'>Wordpress</h4>
                        <h6>Content Management System</h6>
                        <p>Theme and Plugin Development</p>
                        </div>
                    </div>
                    {/* 2nd row All course Section start */}
                    <div className="allcourse_img row">
                        <div className="detailscourse-img border border-4 border-success p-1 text-center mt-3 col-md-2 col-sm-12 m-md-2" >
                        <img src={'img/courses_icon/jquery_img.jpg'} alt="" />
                        <h4 className='text-warning'>Jquery</h4>
                        <h6>JavaScript Library</h6>
                        <p>One Page Application</p>
                        </div>
                        <div className="border border-4 border-dark p-2 text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/php_img.png'} alt="" />
                        <h4 className='text-primary'>Hypertext Preprocessor</h4>
                        <h6>Backend Language</h6>
                        <p>Control Admin Panel</p>
                        </div>
                        <div className="border border-4 p-2 border-danger text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/laravel_img.png'} alt="" />
                        <h5 className='text-success'>Php Framwork Laravel</h5>
                        <h6>Control a Backend Application</h6>
                        <p>Hyper Text Markup Language</p>
                        </div>
                        <div className="border border-4 p-1 border-info  text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/codeginter_img.png'} alt="" />
                        <h5 className='text-info'>Php Framwork Codenegiter</h5>
                        <h6>Control a Backend Application</h6>
                        <p>Control By Admin</p>
                        </div>
                        <div className="border border-4 p-2 border-primary text-center mt-3 col-md-2 col-sm-12 m-md-2">
                        <img src={'img/courses_icon/bootstrap_img.jpg'} alt="" />
                        <h4 className='text-primary'>Bootstrap-5</h4>
                        <h6>Style a Web Application</h6>
                       
                        </div>
                    </div>


        </>
    );
};

export default CourseDetails;