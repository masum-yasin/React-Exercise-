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
     <img src={'img/blog/blog1-770x450 (1).jpg'} alt="" />
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
<div>
  <h1>Categories</h1>
  <h6>Business Studies</h6>
  <p>3</p>
</div>
</div>
    </div>
      </>
    );
};

export default BlogC;