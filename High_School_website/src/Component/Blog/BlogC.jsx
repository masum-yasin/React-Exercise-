import React from 'react';
import './BlogC.css'
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faCalendarDays,faComment,faBook } from '@fortawesome/free-solid-svg-icons'




const BlogC = () => {
    return (
      <>
        {/* header img start */}
        <div className='blog-header-img'>
          <img src={'img/banner/pexels-keira-burton-6146978.jpg'} alt="" />
          {/* header image ending*/}
        <div className='blog-breadcrumb mt-5 border-5  text-center'>
                <Breadcrumb></Breadcrumb>
                <hr />



       </div>
       <div className='blog-heading'><h1>Our Education Blog</h1></div>
    </div>
    <div className="row">
        <div className="container col-lg-8 mt-5">
    <div>
    <img className='blog-img' src={'img/blog/blog1.jpg'} alt="" />
     <div className='d-flex gap-5 mt-5'>
     <FontAwesomeIcon icon={faCalendarDays} className='text-warning'/><p >October 14, 2019</p>
     <FontAwesomeIcon icon={faComment} className='text-warning' /><p >Comments (3)</p>
     <FontAwesomeIcon icon={faUserTie}  className='text-warning' /><p>Admin</p>
     <FontAwesomeIcon icon={faBook} className='text-warning' /><p >Business Studies</p>
     </div>
    <div className='parent'>
    <a className='blog-ancor' href=""><h1 className='child'>Designing Users Across Interview With Jemy</h1></a>
    </div>
    </div>
     <img className='blog-img' src={'img/blog/blog4.jpg'} alt="" />
     <div className='d-flex gap-5 mt-3'>
     <FontAwesomeIcon icon={faCalendarDays} className='text-warning'/><p >October 14, 2019</p>
     <FontAwesomeIcon icon={faComment} className='text-warning' /><p >Comments (3)</p>
     <FontAwesomeIcon icon={faUserTie}  className='text-warning' /><p>Admin</p>
     <FontAwesomeIcon icon={faBook} className='text-warning' /><p >Business Studies</p>
     </div>
     <img className='blog-img' src={'img/blog/blog3.jpg'} alt="" />
     <div className='d-flex gap-5 mt-3'>
     <FontAwesomeIcon icon={faCalendarDays} className='text-warning'/><p >October 14, 2019</p>
     <FontAwesomeIcon icon={faComment} className='text-warning' /><p >Comments (3)</p>
     <FontAwesomeIcon icon={faUserTie}  className='text-warning' /><p>Admin</p>
     <FontAwesomeIcon icon={faBook} className='text-warning' /><p >Business Studies</p>
     </div>
     <img className='blog-img' src={'img/blog/blog5.jpg'} alt="" />
     <div className='d-flex gap-5 mt-3'>
     <FontAwesomeIcon icon={faCalendarDays} className='text-warning'/><p >October 14, 2019</p>
     <FontAwesomeIcon icon={faComment} className='text-warning' /><p >Comments (3)</p>
     <FontAwesomeIcon icon={faUserTie}  className='text-warning' /><p>Admin</p>
     <FontAwesomeIcon icon={faBook} className='text-warning' /><p >Business Studies</p>
     </div>
     <img className='blog-img' src={'img/blog/blog2.jpg'} alt="" />
     <div className='d-flex gap-5 mt-3'>
     <FontAwesomeIcon icon={faCalendarDays} className='text-warning'/><p >October 14, 2019</p>
     <FontAwesomeIcon icon={faComment} className='text-warning' /><p >Comments (3)</p>
     <FontAwesomeIcon icon={faUserTie}  className='text-warning' /><p>Admin</p>
     <FontAwesomeIcon icon={faBook} className='text-warning' /><p >Business Studies</p>
     </div>
     <img className='blog-img' src={'img/blog/blog6.jpg'} alt="" />
     <div className='d-flex gap-5 mt-3'>
     <FontAwesomeIcon icon={faCalendarDays} className='text-warning'/><p >October 14, 2019</p>
     <FontAwesomeIcon icon={faComment} className='text-warning' /><p >Comments (3)</p>
     <FontAwesomeIcon icon={faUserTie}  className='text-warning' /><p>Admin</p>
     <FontAwesomeIcon icon={faBook} className='text-warning' /><p >Business Studies</p>
     </div>
     </div>
        <div className="col-lg-4 mt-5">
        <form className="d-flex">
        
  <div className='search-form'>
    <h4>Search Form</h4>
    <input classname=" form-control me-2" type="search" placeholder="Here are Search" aria-label="Search" />
    <button classname="btn btn-outline-primary" type="submit">Search</button>
  </div>
</form>
<h1 className='categories-heading'>Categories</h1>
<div className='categories-item'>
<h6>Business Studies</h6>
<p>3</p>

 
 </div>
<div className='categories-item'>
<h6>Civil Engineering</h6>
 <p>6</p>
</div>
<div className='categories-item'>
  <h6>Computer Engineering</h6>
  <p>5</p>
</div>
<div className='categories-item'>
  <h6>General Science</h6>
  <p>4</p>
</div>
<div className='categories-item'>
  <h6>Graphics Design</h6>
  <p>3</p>
</div>
<div className='new-courses'>
  <img src="" alt="" />
  <div>
  <div className='new-course-heading'>
  <h3>Resigtation Our</h3>
  <h1>New Courses</h1>
  <p className='mt-5'>Bur wemust ipsum dolor sit amet<br></br> consectetur adipisicing elit sed eiusmod<br></br> tempor incididunt ut labore</p>
  <button>REGISTATION</button>
  </div>
  </div>
</div>
<div className='recent-heading'>
  <h2 >Recent Posts</h2>
  </div>
 <div className='recent-img'>
 <div>
    <img src={'img/blog/blog1.jpg'} alt="" />
  </div>
  <div>
    <h5>
    Designing Users Across<br></br> Interview With Jemy
    </h5>
    <p>October 14, 2019</p>
  </div>
 </div>
 <div className='recent-img'>
 <div>
    <img src={'img/blog/blog2.jpg'} alt="" />
  </div>
  <div>
    <h5>
    Month Web Development<br></br> Update React Hook
   </h5>
   <p>October 14, 2019</p>
  </div>
 </div>
 <div className='recent-img'>
 <div>
    <img src={'img/blog/blog4.jpg'} alt="" />
  </div>
  <div>
    <h5>
    Exploring The Latest Web<br></br> Design Trends    </h5>
    <p>October 14, 2019</p>

  </div>
 </div>



  

</div>

    </div>
      </>
    );
};

export default BlogC;